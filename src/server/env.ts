

const constantEnv = {
    jwtSecret: process.env.JWT_SECRET,
    mailPassport: process.env.MAIL_PASSWORD,
    mailAccaunt: process.env.MAIL_ACCAUNT,
    port: process.env.PORT,
    host: process.env.HOST,
    dbConnectionString: process.env.DB_CONNECTION_STRING,
}

module.exports = constantEnv;