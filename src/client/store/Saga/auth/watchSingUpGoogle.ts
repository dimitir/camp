import { take, call, put } from 'redux-saga/effects';
import actionsList from '../../storeConfig/dispatchActionsList';
import env from '../../../../env';


async function fetchTokenIdFromGoogle(code: string) {
    const bodyPayload = {
        client_id: env.googleId,
        client_secret: env.googleSecret,
        redirect_uri: 'http://localhost:3000/auth/google/callback',
        grant_type: 'authorization_code',
        code: code,
    }

    const response = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(bodyPayload)
    });

    const resData = await response.json();
    console.log(resData); // { access_token, expires_in, token_type, refresh_token }
    return resData.id_token;
};


async function fetchToBackToSetJWT(tokenId: string) {
    console.log('fetchToBackToSetJWT');
    const options = {
        method: 'POST',
        body: JSON.stringify({ tokenId: tokenId }),
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
    };

    let response, dataRespond, text;
    try { response = await fetch('api/auth/google', options) }
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


export default function* watchSingUpGoogle() {
    while (true) {
        try {
            const { code } = yield take(actionsList.SEND_AUTH_CODE_TO_GOOGLE)
            const tokenId = yield call(fetchTokenIdFromGoogle, code);
            const user = yield call(fetchToBackToSetJWT, tokenId);
            yield put({ type: actionsList.SET_AUTH_USER_DATA, user });
            console.log('token');
            console.log(user);
        }
        catch (err) {
            console.error(err);
        }
    }
}