import { Application } from 'express';
const JWTStrategy = require('./strategies/jwt.ts');


const pipe = (...functions: any[]) => (args: Application) => functions.reduce((arg, fn) => fn(arg), args)

const initialiseAuthentication = (app: Application) => {
    pipe(JWTStrategy)(app)
}

module.exports = { initialiseAuthentication }