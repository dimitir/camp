import * as queryString from 'query-string';
import env from '../../../env';
const stringifiedParams = queryString.stringify({
    client_id: env.googleId,
    redirect_uri: 'http://localhost:3000/auth/google/callback',
    scope: [
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile',
    ].join(' '),
    response_type: 'code',
    access_type: 'offline',
    prompt: 'consent',
});

const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`;

export default googleLoginUrl;