import jwt from 'jsonwebtoken';
import env from '../../../env';


const generateJwt = (email: string, expireHoursTime: number) => {
    const date = new Date();
    date.setHours(date.getHours() + expireHoursTime);
    return jwt.sign({ email: email, expiration: date }, env.jwtSecret);
};

const generateMailJwt = (email: string, lastLocation: string, expireHoursTime: number) => {
    const date = new Date();
    date.setHours(date.getHours() + expireHoursTime);
    return jwt.sign({ email: email, expiration: date, lastLocation: lastLocation }, env.jwtSecret);
};


export default generateJwt;
export { generateMailJwt }