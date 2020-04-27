import passport from 'passport';
import passportJWT from "passport-jwt";
import { jwtSecret } from '../../../env';
import { getUserByEmail } from '../../db/user';
import ExtractJwt = passportJWT.ExtractJwt;
const JWTStrategy = passportJWT.Strategy;

console.log('l;lj;slfas;lkfj;slkjf;aslfkjs;l');

const strategy = () => {

    const jwtOptions = {
        secretOrKey: jwtSecret,
        jwtFromRequest: ExtractJwt.fromBodyField('token'),
    }

    passport.use(new JWTStrategy(jwtOptions,
        (jwtPayload: any, done: any) => {
            console.log('jwtPayload');
            let email;
           /*  if (!jwtPayload.email) {
                email = 'emailIsNull';
            }
            else {
            } */
            email = jwtPayload.email;
            return (async () => {
                try {
                    console.log('kkk');
                    console.log(email);
                    const user = await getUserByEmail(email);
                    console.log(user);
                    if (user) {
                        console.log('user had');
                        return done(null, user);
                    }
                    console.log('nema !');
                    return done(null, false);
                }
                catch (err) {
                    return done(err)
                }

            })()
        }
    ));

}

export default strategy;