const express = require('express');
import { Request, Response, NextFunction } from 'express';
const login = require('./routsFunc/login.ts').login;
const isAusorized = require('./routsFunc/isAuthorized.ts');
const passport = require('passport');
require('./ServerRootDocs/auth.ts');
const firstAuthConnect = require('./routsFunc/firstAuthConnect.ts');




var router = express.Router();
const jsonParser = express.json();


router.post('/singup', jsonParser, (req: Request, res: Response) => {
    login(req, res);
});


/* 
router.post('/profile', passport.authenticate('jwt', { session: false }),
    (req: Request, res: Response) => {
        res.send('req.user.profile');
    }
); */

router.post('/firstconnect', jsonParser,
    (req: Request, res: Response, next: NextFunction) => {
        console.log('firstAuthConnect');
        firstAuthConnect(req, res, next);
    }
);










router.get('/account', (req: Request, res: Response, next: NextFunction) => {
    isAusorized(req, res, next);
});

module.exports = router;
