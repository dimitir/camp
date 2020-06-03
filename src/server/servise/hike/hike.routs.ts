import express, { Request, Response, NextFunction } from 'express';
import addHike from './utilites/addHike';

const router = express.Router();
const jsonParser = express.json();

router.post('/add', jsonParser, (req: Request, res: Response, next: NextFunction) => {
    console.log('hikeHike');
    addHike(req, res, next);
})

export default router;