import { take, call, put } from 'redux-saga/effects';
import actionsList from '../../_RootStore/dispatchActionsList';
import env from '../../../../env';
import axios from 'axios';


async function fetchTokenIdFromFacebook(code: string) {
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


async function getFacebookUserData(access_token: string) {
    const { data } = await axios({
        url: 'https://graph.facebook.com/me',
        method: 'get',
        params: {
            fields: ['id', 'email', 'first_name', 'last_name'].join(','),
            access_token,
        },
    });
    console.log(data); // { id, email, first_name, last_name }
    return data;
};

/* 
async function fetchTokenIdFromFacebook(code: string) {
    const bodyPayload = {
        client_id: env.facebookId,
        client_secret: env.facebookSecret,
        redirect_uri: 'http://localhost:3000/auth/facebook/callback/',
        code: code,
    }

    const response = await fetch('http://graph.facebook.com/v4.0/oauth/access_token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(bodyPayload)
    });

    const resData = await response.json();
    console.log('facebook'); // { access_token, expires_in, token_type, refresh_token }
    console.log(resData); // { access_token, expires_in, token_type, refresh_token }
    return resData.access_token;
}; */

/* 
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
    try { response = await fetch('api/auth/googleWayFinish', options) }
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
 */

export default function* watchSingUpFacebook() {
    while (true) {
        try {
            const { code } = yield take(actionsList.SEND_AUTH_CODE_TO_FACEBOOK)
            const access_token = yield call(fetchTokenIdFromFacebook, code);
            const userData = yield call(getFacebookUserData, access_token);
            /* yield put({ type: actionsList.SET_AUTH_USER_DATA, user });
            console.log('token'); */
            console.log(userData);
        }
        catch (err) {
            console.error(err);
        }
    }
}