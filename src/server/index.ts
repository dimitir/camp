const express = require('express');
import { Request, Response } from 'express';
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const jwt = require('jsonwebtoken');
const { portServer, jwtSecret } = require('./ServerRootDocs/_dotEnvConfig.ts');
import { authUserItem } from './ServerRootDocs/typesServer';
const AuthModel = require('./ServerRootDocs/ecoFootModel').AuthModel;
const routsApp = require('./routs.ts');

const app = express();

const port: number = portServer || 8080;
const startServer = () => {
    app.listen(port, () => console.log(`App started on port ${port}`));
}

const connectDb = () => {
    const options = { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false };
    mongoose.connect('mongodb://localhost:27017/ecofoot', options)
    return mongoose.connection
}

connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .once('open', startServer);

app.use('/api', routsApp);


