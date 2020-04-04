import { Request, Response, NextFunction } from 'express';
const jwt = require('jsonwebtoken');
const { generateJwt } = require('./login.ts');
const createError = require('http-errors');
const { jwtSecret } = require('../../env.ts');
const { findUserByEmail, findUserByIdAndUpdate } = require('../../db/user/user.ts');


const isAuthorized = (req: Request, res: Response, next: NextFunction) => {

    const operation = req.query.operation;
    const token = req.query.token;

    if (!operation || !operation.startsWith('login')) {
        return next(createError(400, 'Can not verify jwt, operation-login failed '));
    }


    let decoded;
    try {
        decoded = jwt.verify(token, jwtSecret);
    } catch {
        return next(createError(403, 'cennot verify jwt, decoded failed'));

    }

    if (!decoded.hasOwnProperty('email') || !decoded.hasOwnProperty('expiration')) {
        return next(createError(403, 'invalid jwt token'));
    }


    const { email, expiration } = (decoded as { email: string, expiration: Date });
    if (expiration < new Date()) {
        return next(createError(403, 'token has expired'));
    }

    return (async () => {
        let findUser;
        try {
            findUser = await findUserByEmail(email);
        } catch{
            return next(createError(403, 'failed to find user'));
        }


        try {
            const newJwt = generateJwt(email, 1460);
            const id = findUser._id;
            const authTrue: boolean = true;
            const setData = await findUserByIdAndUpdate(id, newJwt, authTrue);
            res.send(setData);
        } catch{
            return next(createError(403, 'Failed to update user'));
        }
    })()


}


module.exports = isAuthorized;