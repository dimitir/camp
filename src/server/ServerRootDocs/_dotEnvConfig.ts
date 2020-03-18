const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    portServer: process.env.PORT,
    jwtSecret: process.env.JVT_SECRET,
    mailAccaunt: process.env.MAIL_ACCAUNT,
    mailPassword: process.env.MAIL_PASSWORD,
    host: process.env.HOST,
};
