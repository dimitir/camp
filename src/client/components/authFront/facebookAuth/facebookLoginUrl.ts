import * as queryString from 'query-string';
import env from '../../../../env';

const stringifiedParams = queryString.stringify({
    client_id: env.facebookId,
    redirect_uri: 'http://localhost:3000/auth/facebook/callback',
    scope: ['email', 'user_friends'].join(','), // comma seperated string
    response_type: 'code',
    auth_type: 'rerequest',
    display: 'popup',
});

const facebookLoginUrl = `https://www.facebook.com/v4.0/dialog/oauth?${stringifiedParams}`;

export default facebookLoginUrl;