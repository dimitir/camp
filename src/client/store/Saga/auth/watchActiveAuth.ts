import { take, call, put, select } from 'redux-saga/effects';
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
    }
    catch {
        dataRes = null;
        throw new Error('Is no Json in response')
    }

    if (dataRes) { return dataRes }
    else { console.log('Is no Json in response'); }
}






export default function* watchActiveAuth() {
    try {
        const token = localStorage.getItem('token');
        // const state = yield select();

        if (token) {
            let user;
            try {
                user = yield call(fetchToBackForUser, (token as string));
                if (user) {
                    yield put({ type: actionsList.SET_AUTH_USER_DATA, user });
                    localStorage.setItem('userPic', user.picture);
                }
                else {
                    throw new Error(' initial user is not get')
                }
            }
            catch{
                user = {};
                yield put({ type: actionsList.SET_AUTH_USER_DATA, user });
                throw new Error(' initial user is not get')
            }
        }

    }
    catch (err) {
        console.error(err);
    }
}