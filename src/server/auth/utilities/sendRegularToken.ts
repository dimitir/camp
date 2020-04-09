import { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';
import jwt from 'jsonwebtoken';
import { jwtSecret } from '../../env';
import { getUserByEmail } from '../../db/user/user';
import { IUser } from '../../db/Types';
console.log(jwtSecret);


const sendRegularToken = (req: Request, res: Response, next: NextFunction) => {
    console.log('Gofo');
    const token = req.body.token;
    console.log(token);
    if (!token) {
        next(createError(400, 'Have not the token'))
    }
    else {
        const decoded: any = jwt.verify(token, (jwtSecret as string));
        console.log(decoded);
        const email = decoded.email;
        console.log('set email  ' + email);

        (async () => {
            try {
                const user: IUser = await getUserByEmail(email)
                console.group('user');
                console.log(typeof user);
                console.log(user);
                // const userJwt = user['0'].jwt;
                res.send({ jwt: user.jwt });
            }
            catch{
                next(createError(403, 'User is absent'));
            }
        })()
    }



}

export { sendRegularToken };