import { take, call, put } from 'redux-saga/effects';
import jwt from 'jsonwebtoken';
import actionsList from '../../_RootStore/dispatchActionsList';
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






export default function* watchActiveAuth() {
    try {
        const token = localStorage.getItem('token');
        if (token) {
            const user = yield call(fetchToBackForUser, (token as string));
            yield put({ type: actionsList.SET_AUTH_USER_DATA, user });
        }

    }
    catch (err) {
        console.error(err);
    }
}

// add check when token is undefined;
// add remuve email, user in db