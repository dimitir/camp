const express = require('express');
import { Request, Response, NextFunction } from 'express';
const { login } = require('../auth/utilities/login.ts');
const isAusorized = require('../auth/utilities/isAuthorized.ts');
const sendRegularToken = require('../auth/utilities/sendRegularToken.ts');
require('../auth/strategies/jwt.ts');
const passport = require('passport');

var router = express.Router();
const jsonParser = express.json();


router.post('/singup', jsonParser, (req: Request, res: Response) => {
    login(req, res);
});


router.post('/profile', jsonParser, passport.authenticate('jwt', { session: false }),
    (req: Request, res: Response) => {
        console.log('GUlay pole');
        res.send({ text: 'rabotaet' });
    }
);


router.post('/setRegularToken', jsonParser,
    (req: Request, res: Response, next: NextFunction) => {
        sendRegularToken(req, res, next);
    }
);


router.get('/account', (req: Request, res: Response, next: NextFunction) => {
    isAusorized(req, res, next);
});


module.exports = router;
