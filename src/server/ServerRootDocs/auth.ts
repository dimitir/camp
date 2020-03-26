const passport = require('passport');
const passportJWT = require("passport-jwt");

const { jwtSecret } = require('./envConfig.ts');
import { jwtStrategySingature } from './typesServer'
const { AuthModel } = require('./ecoFootModel.ts');
console.log('jwtSecret');
console.log(jwtSecret);
const ExtractJwt = passportJWT.ExtractJwt;
const JWTStrategy = passportJWT.Strategy;


const jwtOptions = {
    secretOrKey: jwtSecret, //the same one we used for token generation
    algorithms: 'HS256', //the same one we used for token generation
    jwtFromRequest: ExtractJwt.fromBodyField('token'), //how we want to extract token from the request
}

passport.use(new JWTStrategy(jwtOptions,
    ({ token, done }: jwtStrategySingature) => {
        const email = token.email;

        return (async () => {
            try {
                const user = await AuthModel.findOne({ email: email });
                if (user) {
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
