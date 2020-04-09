import { Application } from 'express';
import JWTStrategy from './strategies/jwt';
import GoogleStrategy from './strategies/google';


const pipe = (...functions: any[]) => (args: Application) => functions.reduce((arg, fn) => fn(arg), args)

const initialiseAuthentication = (app: Application) => {
    pipe(GoogleStrategy, JWTStrategy)(app)
}

export { initialiseAuthentication }