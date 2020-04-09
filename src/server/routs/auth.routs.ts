import express from 'express';
import { Request, Response, NextFunction } from 'express';
import { login } from '../auth/utilities/login';
import { isAuthorized } from '../auth/utilities/isAuthorized';
import { sendRegularToken } from '../auth/utilities/sendRegularToken';
// require('../auth/strategies/jwt.ts');
import passport from 'passport';

var router = express.Router();
const jsonParser = express.json();


router.post('/singup', jsonParser, (req: Request, res: Response, next: NextFunction) => {
    console.log('login');
    login(req, res, next);
});



router.post('/profile', jsonParser, passport.authenticate('jwt', { session: false }),
    (req: Request, res: Response) => {
        console.log('GUlay pole');
        res.send({ text: 'rabotaet' });
    }
);


router.post('/setRegularToken', jsonParser,
    (req: Request, res: Response, next: NextFunction) => {
        console.log('ecnm');
        sendRegularToken(req, res, next);
    }
);


router.get('/account', (req: Request, res: Response, next: NextFunction) => {
    isAuthorized(req, res, next);
});


router.get('/test', (req: Request, res: Response, next: NextFunction) => {
    res.send('test');
});


export default router;
