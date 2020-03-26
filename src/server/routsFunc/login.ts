import { Request, Response } from 'express';
const AuthModel = require('../ServerRootDocs/ecoFootModel.ts').AuthModel;
const { jwtSecret, mailAccaunt, mailPassword, host } = require('../ServerRootDocs/envConfig.ts');
import { authUserItem } from '../ServerRootDocs/typesServer';
const jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");
const HttpStatus = require('http-status-codes');



const generateJwt = (email: string, expireHoursTime: number) => {
    const date = new Date();
    date.setHours(date.getHours() + expireHoursTime);
    return jwt.sign({ email: email, expiration: date }, jwtSecret);
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
        pass: mailPassword
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


const login = (req: Request, res: Response) => {
    const { email } = req.body;

    if (!email) {
        return res.status(HttpStatus.BED_REQUEST).send({ error: 'email is required' });
    }


    return (async () => {
        try {
            const token = generateJwt(email, 2);
            const mailOptionst = {
                from: '<eco>',
                to: email,
                subject: "Invitation",
                html: emailTemplate({ userName: 'Dear treveler', link: `${host}/account?token=${token}&operation=login` })
            }

            await transporter.sendMail(mailOptionst);

            const userAuthData: authUserItem = {
                jwt: token,
                email: email,
                auth: false
            };
            const authFirst = await AuthModel.create(userAuthData);
            await authFirst.save();
            return await res.status(HttpStatus.OK).json({ jwt: userAuthData.jwt });
        } catch (err) {
            return await res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ error: err });
        }
    })()
}


module.exports = {
    generateJwt,
    login
}
/*
module.exports.generateJwt;
module.exports.login; */
