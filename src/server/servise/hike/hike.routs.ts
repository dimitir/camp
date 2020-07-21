import express, { Request, Response, NextFunction } from 'express';
import addHike from './utilites/addHike';
import getHikesList from './utilites/getHikesList';
import getHikeOne from './utilites/getHikeOne';

const router = express.Router();
const jsonParser = express.json();

router.post('/add', jsonParser, (req: Request, res: Response, next: NextFunction) => {
    console.log('hikeHike');
    addHike(req, res, next);
});


router.post('/list', jsonParser, (req: Request, res: Response, next: NextFunction) => {
    console.log('getHikesList');
    getHikesList(req, res, next);
});


router.post('/getOne', jsonParser, (req: Request, res: Response, next: NextFunction) => {
    console.log('getHike');
    console.log(req.body);
    getHikeOne(req, res, next);
});

export default router;