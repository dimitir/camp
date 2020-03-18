const express = require('express');
import { Request, Response } from 'express';
const AuthModel = require('./ServerRootDocs/ecoFootModel').AuthModel;
const { jwtSecret, mailAccaunt, mailPassword, host } = require('./ServerRootDocs/_dotEnvConfig.ts');
import { authUserItem } from './ServerRootDocs/typesServer';
const jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");
const HttpStatus = require('http-status-codes');

console.log(mailAccaunt);
console.log(mailPassword);

var router = express.Router();
const jsonParser = express.json();

const generateJwt = (email: string) => {
    const date = new Date();
    console.log(date);
    date.setHours(date.getHours() + 2);
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

interface LoginRequest extends Request {
    body: {
        email?: string;
    }
};


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

    // console.log("Message sent: %s", info.messageId);

    return (async () => {
        try {
            const token = generateJwt(email);
            const mailOptionst = {
                from: '<eco>',
                to: email,
                subject: "Invitation",
                html: emailTemplate({ userName: 'Dear treveler', link: `${host}/account?token=${token}` })
            }

            await transporter.sendMail(mailOptionst);

            const userAuthData: authUserItem = {
                jwt: token,
                auth: false
            };
            const authFirst = await AuthModel.create(userAuthData);
            await authFirst.save();
            return await res.status(HttpStatus.OK).json({ jwt: userAuthData.jwt })
        } catch (err) {
            return await res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ error: err })
        }
    })()
}



router.post('/singup', jsonParser, (req: Request, res: Response) => {
    login(req, res);
})


router.get('/account', (req: Request, res: Response) => {
    const token = req.query.token;
    console.log(token);
    (() => {
        try {
            res.json(token);
        }
        catch (err) {
            res.status(500).send(err);
        }
    })()

})



module.exports = router;