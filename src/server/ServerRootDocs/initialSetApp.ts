const express = require('express');
const { portServer } = require('../../../envConfig.ts');


export const app = express();

const port: number = portServer || 8080;
const startServer = () => {
    app.listen(port, () => console.log(`App started on port ${port}`));
};


const connectDb = () => {
    const options = { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false };
    mongoose.connect('mongodb://localhost:27017/ecofoot', options)
    return mongoose.connection
};

connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .once('open', startServer);

