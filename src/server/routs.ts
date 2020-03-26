const express = require('express');
import { Request, Response, NextFunction } from 'express';
const login = require('./routsFunc/login.ts').login;
const isAusorized = require('./routsFunc/isAuthorized.ts');
const passport = require('passport');
require('./ServerRootDocs/auth.ts');
const setTokenFront = require('./routsFunc/setTokenFront.ts');




var router = express.Router();
const jsonParser = express.json();


router.post('/singup', jsonParser, (req: Request, res: Response) => {
    login(req, res);
});


router.get('/account', (req: Request, res: Response, next: NextFunction) => {
    isAusorized(req, res, next);
});

/* 
router.post('/profile', passport.authenticate('jwt', { session: false }),
    (req: Request, res: Response) => {
        res.send('req.user.profile');
    }
); */

router.post('/setTokenFront',
    (req: Request, res: Response, next: NextFunction) => {
        setTokenFront(req, res, next)
    }
);


module.exports = router;
