//  const dotenv = require('dotenv');
// dotenv.config(); 

console.log(process.env.NODE_ENV);

module.exports = {
    portServer: process.env.PORT,
    jwtSecret: process.env.JWT_SECRET,
    mailAccaunt: process.env.MAIL_ACCAUNT,
    mailPassword: process.env.MAIL_PASSWORD,
    host: process.env.HOST,
};



// export const jwtSecret = process.env.JVT_SECRET;