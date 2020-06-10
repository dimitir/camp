import { take, call, put } from 'redux-saga/effects';
import actionsList from '../../storeConfig/dispatchActionsList';
import env from '../../../../env';
import axios from 'axios';


async function fetchAccessTokenFromFacebook(code: string) {
    const { data } = await axios({
        url: 'https://graph.facebook.com/v4.0/oauth/access_token',
        method: 'get',
        params: {
            client_id: env.facebookId,
            client_secret: env.facebookSecret,
            redirect_uri: 'http://localhost:3000/auth/facebook/callback',
            code,
        },
    });
    console.log(data); // { access_token, token_type, expires_in }
    return data.access_token;
};


async function fetchToBackToSetJWT(accessToken: string) {
    console.log('fetchToBackToSetJWT');
    const options = {
        method: 'POST',
        body: JSON.stringify({ access_token: accessToken }),
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
    };

    let response, dataRespond, text;
    try { response = await fetch(`${env.host}/auth/facebook`, options) }
    catch (err) { new Error('fetch auth singup is failed'); }

    if (response) {
        try { text = await response.text(); }
        catch (e) { throw new Error(e) }

        try { dataRespond = JSON.parse(text); }
        catch { dataRespond = null; }
    }

    if (dataRespond) {
        console.log('dataRespond');
        console.log(dataRespond);
        localStorage.setItem('token', dataRespond.jwt);
        localStorage.removeItem('expectFirstAuth');
        console.log(localStorage.getItem('token'));
        return dataRespond;
    } else return null;
}

export default function* watchSingUpFacebook() {
    while (true) {
        try {
            const { code } = yield take(actionsList.SEND_AUTH_CODE_TO_FACEBOOK)
            const access_token = yield call(fetchAccessTokenFromFacebook, code);
            const user = yield call(fetchToBackToSetJWT, access_token);
            // const userData = yield call(getFacebookUserData, access_token);
            yield put({ type: actionsList.SET_AUTH_USER_DATA, user });
            console.log('token');
            console.log(user);
        }
        catch (err) {
            console.error(err);
        }
    }
}