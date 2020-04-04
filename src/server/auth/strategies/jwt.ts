const passport = require('passport');
const passportJWT = require("passport-jwt");
const { jwtSecret } = require('../../env');
const findUserByEmail = require('../../db/user/user');
const ExtractJwt = passportJWT.ExtractJwt;
export { }
const JWTStrategy = passportJWT.Strategy;

console.log('l;lj;slfas;lkfj;slkjf;aslfkjs;l');

const strategy = () => {

    const jwtOptions = {
        secretOrKey: jwtSecret,
        jwtFromRequest: ExtractJwt.fromBodyField('token'),
    }

    passport.use(new JWTStrategy(jwtOptions,
        (jwtPayload: any, done: any) => {
            console.log(jwtPayload);
            const email = jwtPayload.email;
            return (async () => {
                try {
                    console.log('kkk');
                    const user = await findUserByEmail(email);
                    console.log(user);
                    if (user) {
                        console.log('user had');
                        return done(null, user);
                    }
                    return done(null, false);
                }
                catch (err) {
                    return done(err)
                }

            })()
        }
    ));

}

module.exports = strategy;