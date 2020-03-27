const express = require('express');
export { };
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const routsApp = require('./routs.ts');
const app = express();

const port = process.env.PORT || 8080;
const startServer = () => {
    console.log(port);
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


