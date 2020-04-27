import express from 'express';
import { Request, Response, NextFunction } from 'express';
import { loginSendMailSaveUser, isAuthorizedFromMail, sendTokenEmailAuth, sendTokenGoogleAuth } from '../auth/utilities';
import passport from 'passport';

var router = express.Router();
const jsonParser = express.json();


router.post('/loginEmail', jsonParser, (req: Request, res: Response, next: NextFunction) => {
    loginSendMailSaveUser(req, res, next);
});



router.post('/profile', jsonParser, passport.authenticate('jwt', { session: false }),
    (req: Request, res: Response) => {
        res.send({ text: 'rabotaet' });
    }
);


router.post('/emailWayFinish', jsonParser,
    (req: Request, res: Response, next: NextFunction) => {
        sendTokenEmailAuth(req, res, next);
    }
);


router.get('/account', (req: Request, res: Response, next: NextFunction) => {
    isAuthorizedFromMail(req, res, next);
});


router.get('/test', (req: Request, res: Response, next: NextFunction) => {
    res.send('test');
});


router.post('/googleWayFinish', jsonParser,
    (req: Request, res: Response, next: NextFunction) => {
        sendTokenGoogleAuth(req, res, next);
    }
);





export default router;
