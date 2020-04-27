import { take, call, put } from 'redux-saga/effects';
import actionsList from '../../_RootStore/dispatchActionsList';


async function fetchEmail(email: string) {
    const lastLocation = localStorage.getItem('lastLocation');

    const data = {
        email: email,
        lastLocation: lastLocation,
    }

    let response, dataRespond, text;

    try {
        response = await fetch('api/auth/loginEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(data)
        })
    } catch (err) { new Error('fetch auth singup is failed'); }

    if (response) {
        try { text = await response.text(); }
        catch (e) { throw new Error(e) }

        try { dataRespond = JSON.parse(text); }
        catch { dataRespond = null; }
    }

    if (dataRespond) {
        console.log(dataRespond);
        localStorage.setItem('token', dataRespond.jwt);
        localStorage.setItem('expectFirstAuth', 'expect');
        console.log(localStorage.getItem('token'));
    }

}



export default function* watchUserSendEmail() {

    while (true) {
        try {
            const { email } = yield take(actionsList.LOGIN_SEND_EMAIL);
            const user = yield call(fetchEmail, email);
        }
        catch (err) {
            console.error(err);
        }
    }
}