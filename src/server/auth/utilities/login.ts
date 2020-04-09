import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import HttpStatus from 'http-status-codes';
import { jwtSecret, host, mailPassport, mailAccaunt } from '../../env';
import createError from 'http-errors';
import { createUser, getUserByEmail } from '../../db/user/user';


const generateJwt = (email: string, expireHoursTime: number) => {
    const date = new Date();
    date.setHours(date.getHours() + expireHoursTime);
    return jwt.sign({ email: email, expiration: date }, (jwtSecret as string));
};

const emailTemplate = ({ userName, link }: { userName: string, link: string }) => `
    <h2>Eco Foot</h2>
    <p>
    Hi ${userName} Click the link below to sign in to your EcoFoot account.
    This link will expire in 2 hours and can only be used once. Have a good day! 
    ${link}
     </p>
    <a href=${link}>Sing to EcoFoot </a>
`;


const smtpConfig = {
    tls: { rejectUnauthorized: false },
    service: 'gmail',
    auth: {
        user: mailAccaunt,
        pass: mailPassport
    }
};

const transporter = nodemailer.createTransport(smtpConfig);

transporter.verify(function (error: any, success: any) {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages");
    }
});


const login = (req: Request, res: Response, next: NextFunction) => {


    const { email } = req.body;

    console.log(email);
    console.log('email');

    if (!email) {
        return next(createError(400, 'Email is required'));
    }


    return (async () => {

        const token = generateJwt(email, 2);
        const mailOptionst = {
            from: '<eco>',
            to: email,
            subject: "Invitation",
            html: emailTemplate({ userName: 'Dear treveler', link: `${host}/auth/account?token=${token}&operation=login` })
        };

        try {
            await transporter.sendMail(mailOptionst);
        } catch{
            return next(createError(403, 'Mail is not send'))
        }

        //  add remove user when his sing out!!!, or overtime is heppen
        /*     try {
                const user = await getUserByEmail(email);
                if (user) { return next(createError(403, 'Email in already use')) }
            } catch (error) {
                return next(createError(403, 'User in not check'))
            }
     */

        try { const newUser = await createUser(token, email); }
        catch { return next(createError(403, 'User in not create')) }


        try { return await res.status(HttpStatus.OK).json({ jwt: token }); }
        catch (e) { return next(createError(403, 'Bed request')) }


    })()
}


export { generateJwt, login };

