import { NextFunction, Request, Response } from 'express';
const createError = require('http-errors');
const jwt = require('jsonwebtoken');
const { AuthModel } = require('../ServerRootDocs/ecoFootModel.ts');

const firstAuthConnect = (req: Request, res: Response, next: NextFunction) => {
    console.log('Gofo');
    const token = req.body.token;
    console.log(token);
    if (!token) {
        next(createError(400, 'Have not the token'))
    }
    else {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        const email = decoded.email;
        console.log('set email  ' + email);

        (async () => {
            try {
                const user = await AuthModel.findOne({ email: email });
                console.group('user');
                console.log(user);
                res.send({ jwt: user.jwt });
            }
            catch{
                next(createError(403, 'User is absent'));
            }
        })()
    }



}

module.exports = firstAuthConnect;