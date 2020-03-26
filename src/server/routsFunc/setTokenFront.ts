import { Request, Response, NextFunction } from 'express';

const createError = require('http-errors');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../ServerRootDocs/envConfig.ts');
const { AuthModel } = require('../ServerRootDocs/ecoFootModel.ts');

const setTokenFront = (req: Request, res: Response, next: NextFunction) => {
    const token = req.body.token;

    if (!token) {
        next(createError(400, 'Have not the token'))
    }
    const decoded = jwt.verify(jwtSecret, token);
    const email = decoded.email;
    return (async () => {
        try {
            const user = await AuthModel.findOne({ email: email });
            console.group('user');
            console.log(user);

            res.send(user.jwt);
        }
        catch{
            next(createError(403, 'User is absent'));
        }
    })()


}

module.exports = setTokenFront;