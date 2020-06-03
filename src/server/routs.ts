import { Application } from "express";
import authRoutes from './servise/auth/auth.routs';
import hikeRoutes from './servise/hike/hike.routs';
import { baseApiUrl } from '../env';


const routsApp = (app: Application) => {
    app.use(`${baseApiUrl}/hike`, hikeRoutes);
    app.use(`${baseApiUrl}/auth`, authRoutes);
}

export default routsApp;