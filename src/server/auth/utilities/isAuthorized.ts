import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { generateJwt } from './login';
import createError from 'http-errors';
import { jwtSecret } from '../../env';
import { getUserByEmail, getUserByIdAndUpdate } from '../../db/user/user';
import { IUser } from '../../db/Types';

const isAuthorized = (req: Request, res: Response, next: NextFunction) => {

    const operation = req.query.operation;
    const token = req.query.token;

    if (!operation || !operation.startsWith('login')) {
        return next(createError(400, 'Can not verify jwt, operation-login failed '));
    }


    let decoded;
    try { decoded = jwt.verify(token, (jwtSecret as string)); }
    catch { return next(createError(403, 'cennot verify jwt, decoded failed')); }

    if (!decoded.hasOwnProperty('email') || !decoded.hasOwnProperty('expiration')) {
        return next(createError(403, 'invalid jwt token'));
    }


    const { email, expiration } = (decoded as { email: string, expiration: Date });
    if (expiration < new Date()) {
        return next(createError(403, 'token has expired'));
    }

    return (async () => {
        let findUser: IUser;
        try {
            findUser = await getUserByEmail(email);
            console.log('findUser');
            console.log(findUser );
            console.log(findUser._id );


        } catch{
            return next(createError(403, 'failed to find user'));
        }


        try {
            // 1460 hours it is 60 days
            const newJwt = generateJwt(email, 1460);
           /*  console.log(findUser);
            console.log('findUser'); */
            const id = findUser._id;
            const authTrue: boolean = true;
            const setData = await getUserByIdAndUpdate(id, newJwt, authTrue);
            console.log('setData');
            console.log(setData);
            res.send(setData);

        } catch{
            return next(createError(403, 'Failed to update user'));
        }
    })()


}


export { isAuthorized };