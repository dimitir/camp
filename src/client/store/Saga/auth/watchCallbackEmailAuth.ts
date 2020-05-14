import { take, call, put } from 'redux-saga/effects';
import jwt from 'jsonwebtoken';
import actionsList from '../../storeConfig/dispatchActionsList';
import env from '../../../../env';

async function fetchToBackForUser(token: string) {
    const data = {
        token: token
    }
    let response, text, dataRes;

    try {
        response = await fetch(`${env.host}/auth/userData`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(data)
        });
    } catch (e) { throw new Error(e) }

    try { text = await response.text(); }
    catch (e) { throw new Error(e) }

    try {
        dataRes = JSON.parse(text);
        console.log('dataRes');
        console.log(dataRes);
    }
    catch { dataRes = null; }

    if (dataRes) { return dataRes }
    else { console.log('Is no Json in response'); }
}






export default function* watchCallBackEmailAuth() {
    while (true) {
        try {
            const { token } = yield take(actionsList.MANAGE_CALL_BACK_EMAIL_AUTH);
            console.group('email group');
            console.log(token);
            const user = yield call(fetchToBackForUser, token);
            if (user) {
                yield put({ type: actionsList.SET_AUTH_USER_DATA, user });
                localStorage.setItem('token', user.jwt)
            }
        }
        catch (err) {
            console.error(err);
        }
    }
}

// add check when token is undefined;
// add remuve email, user in db