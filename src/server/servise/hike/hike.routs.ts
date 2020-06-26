import express, { Request, Response, NextFunction } from 'express';
import addHike from './utilites/addHike';
import getHikesList from './utilites/getHikesList';

const router = express.Router();
const jsonParser = express.json();

router.post('/add', jsonParser, (req: Request, res: Response, next: NextFunction) => {
    console.log('hikeHike');
    addHike(req, res, next);
})


router.post('/list', jsonParser, (req: Request, res: Response, next: NextFunction) => {
    console.log('getHikesList');
    getHikesList(req, res, next);
})

export default router;