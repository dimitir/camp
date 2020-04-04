import { take, call } from 'redux-saga/effects';

import actionsList from '../_RootStore/dispatchActionsList';

async function fetchEmail(email: string) {
    console.log('111111111111');
    const data = {
        email: email
    }
    try {
        const response = await fetch('api/auth/singup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(data)
        })
        const dataRespond = await response.json();
        localStorage.setItem('token', dataRespond.jwt);
        localStorage.setItem('expectFirstAuth', 'expect');
        console.log(localStorage.getItem('token'));

    } catch (err) {
        console.error(err);
    }
}


export default function* watchUserSendEmail() {

    while (true) {
        try {
            const { email } = yield take(actionsList.SING_UP_SEND_EMAIL)
            const user = yield call(fetchEmail, email);
        }
        catch (err) {
            console.error(err);
        }
    }

}