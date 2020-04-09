import express from 'express';
import mongoose from 'mongoose';
import bluebird from 'bluebird';
mongoose.Promise = bluebird;
import { port, dbConnectionString } from './env';
import { initialiseAuthentication } from './auth/auth';
import routsApp from './routs/routs';

const app = express();

const startServer = () => {
    console.log(port);
    app.listen(port, () => console.log(`App started on port ${port}`));
}

const connectDb = () => {
    console.log('connect db');
    const options = { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false };
    mongoose.connect((dbConnectionString as string), options)
    return mongoose.connection
}


connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .once('open', startServer);

initialiseAuthentication(app);
routsApp(app);

// app.use('/api', routsApp);


