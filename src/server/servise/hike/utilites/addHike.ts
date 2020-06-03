import createError from 'http-errors';
import { Request, Response, NextFunction } from 'express';

const addHike = (req: Request, res: Response, next: NextFunction) => {
    const { hike } = req.body;
    console.log('hike');
    console.log(hike);
    console.log(req.body);

}

// return next(createError(400, 'Email and lastLocation is required'));


export default addHike;