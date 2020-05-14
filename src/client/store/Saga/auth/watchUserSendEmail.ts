import { take, call, put } from 'redux-saga/effects';
import actionsList from '../../storeConfig/dispatchActionsList';
import modalName from '../../modals/modalNamesList';

async function fetchEmail(email: string) {
    const data = {
        email: email,
    }

    let response, text;
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
        try {
            text = await response.text();
            console.log(text);
        }
        catch (e) { throw new Error(e) }
    }

    if (text = 'OK') {
        return true;
    }
    return false
}

export default function* watchUserSendEmail() {
    while (true) {
        try {
            const { email } = yield take(actionsList.LOGIN_SEND_EMAIL);
            const user = yield call(fetchEmail, email);
            if (user) {
                yield put({ type: actionsList.SHOW_MODAL, modalType: modalName.CHECK_YOU_INBOX })
            }
        }
        catch (err) {
            console.error(err);
        }
    }
}