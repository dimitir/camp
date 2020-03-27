import { Request, Response, NextFunction } from 'express';
const { AuthModel } = require('../ServerRootDocs/ecoFootModel.ts');
const jwt = require('jsonwebtoken');
const { generateJwt } = require('./login.ts');
const createError = require('http-errors');
/* 
console.group('generateJwt');
console.log(generateJwt(jwtSecret, 730)); */


const ExtractJwt = require('passport-jwt').ExtractJwt;
const JwtStrategy = require('passport-jwt').Strategy;

const jwtOptions = {
    secretOrKey: 'hhQqDlk/Hp+8d...', //the same one we used for token generation
    algorithms: 'HS256', //the same one we used for token generation
    jwtFromRequest: ExtractJwt.fromUrlQueryParameter('token'), //how we want to extract token from the request
};







const isAuthorized = (req: Request, res: Response, next: NextFunction) => {

    const operation = req.query.operation;
    const token = req.query.token;

    if (!operation || !operation.startsWith('login')) {
        return next(createError(400, 'Can not verify jwt, operation-login failed '));
    }


    let decoded;
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET);
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
            findUser = await AuthModel.find({ email: email });
        } catch{
            return next(createError(403, 'failed to find user'));
        }


        try {
            const newJwt = generateJwt(process.env.JWT_SECRET, 1460);
            const id = findUser._id;
            const setData = await AuthModel.findOneAndUpdate(id, { jwt: newJwt, auth: true });
            res.send(setData);
        } catch{
            return next(createError(403, 'Failed to update user'));
        }
    })()


}


module.exports = isAuthorized;