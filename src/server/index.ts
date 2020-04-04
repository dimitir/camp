import routsApp, {dopo} from './routs/routs';
const express = require('express');
// export { };
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { portEnv, dbConnectionString } = require('./env.ts');
// const routsApp = require('./routs/routs.ts');
const app = express();
console.log(dopo);
console.log('auth');
console.log(routsApp);

const port = portEnv || 8090;
const startServer = () => {
    console.log(port);
    app.listen(port, () => console.log(`App started on port ${port}`));
}

const connectDb = () => {
    console.log('connect db');
    const options = { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false };
    mongoose.connect(dbConnectionString, options)
    return mongoose.connection
}

connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .once('open', startServer);




// routsApp(app);
// app.use('/api', routsApp);


