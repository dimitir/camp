import passport from 'passport'
import passportGoogle from 'passport-google-oauth';
import { Application } from 'express';
import { getUserByProviderId, createUserProvider } from '../../db/user/user';
import env from '../../env';

// const GOOGLE_CLIENT_ID = envVal.get('GOOGLE_CLIENT_ID');
// console.log(GOOGLE_CLIENT_ID);

const test = process.env.HOST;
console.log(test);
console.log(typeof test);

const GoogleStrategy = passportGoogle.OAuth2Strategy

const strategy = (app: Application) => {

    const strategyOptions = {
        clientID: env.googleId,
        clientSecret: env.googleSecret,
        callbackURL: `${env.baseApiUrl}/auth/google/callback`,
        passReqToCallback: true,
    }

    const verifyCallback = async (profile: any, done: any) => {

        let user;
        try { user = await getUserByProviderId(profile.id); }
        catch (e) { return done(e) };
        if (user) return done(new Error('user is exist'), user);


        const verifiedEmail = profile.email.find((email: any) => email.verified) || profile.email[0];

        let createdUser;
        try {
            createdUser = await
                createUserProvider({
                    provider: profile.provider,
                    providerId: profile.id,
                    firstName: profile.name.givenName,
                    lastName: profile.name.lastName,
                    displayName: profile.displayName,
                    email: verifiedEmail.value
                })
        }
        catch (e) { return done(e) }

        return done(createdUser);
    }



    passport.use(new GoogleStrategy(strategyOptions, verifyCallback));

    app.get(
        `/api/auth/google`,
        passport.authenticate('google', {
            scope: [
                'https://www.googleapis.com/auth/userinfo.profile',
                'https://www.googleapis.com/auth/userinfo.email'
            ]
        })
    )

    app.get(
        `${process.env.BASE_API_URL}/auth/google/callback`,
        passport.authenticate('google', { failureRedirect: '/login' }),
        (req, res) => {
            return res
                .status(200)
                .redirect("/")
        }
    )

    return app
}

export default strategy;