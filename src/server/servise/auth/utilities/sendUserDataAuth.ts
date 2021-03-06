import { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';
import jwt from 'jsonwebtoken';
import env from '../../../../env';
import { getUserByEmail } from '../../../db/user';

const sendUserDataAuth = (req: Request, res: Response, next: NextFunction) => {
    const token = req.body.token;
    console.log('token');
    if (!token) {
        next(createError(400, 'Have not the token'))
    }
    else {
        const decoded: any = jwt.verify(token, env.jwtSecret);
        const email = decoded.email;
        (async () => {
            try {
                const user = await getUserByEmail(email)
                res.send(user);
            }
            catch{
                next(createError(403, 'User is absent'));
            }
        })()
    }
}

export default sendUserDataAuth;
