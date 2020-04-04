import { Application } from "express";

const authRoutes = require('./auth.routs.ts');
const { host } = require('../env.ts');

const routsApp = (app: Application) => {
    console.log('ne ne ne');
    app.use(`${host}/auth`, authRoutes);
}

const yy = () => {
    return 'testApp'
}
export const dopo = 'testik';

// module.exports = routsApp;
export default routsApp;