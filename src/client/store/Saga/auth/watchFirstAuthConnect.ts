import { take, call, put } from 'redux-saga/effects';
import jwt from 'jsonwebtoken';
import actionsList from '../../_RootStore/dispatchActionsList';

async function fetchTest(tokenVal: string) {
    console.log('tokenVal');
    const data = {
        token: tokenVal
    }
    let response, text, dataRes;

    try {
        response = await fetch('api/auth/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(data)
        });
    } catch (e) { throw new Error(e) }

    try { text = await response.text(); }
    catch (e) { throw new Error(e) }

    try { dataRes = JSON.parse(text); }
    catch { dataRes = null; }

    if (dataRes) { console.log(dataRes.text); }
    else { console.log('Is no Json in response'); }
}

async function fetchToken(tokenVal: string) {
    const data = {
        token: tokenVal
    }
    try {
        const response = await fetch('api/auth/emailWayFinish', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(data)
        })

        const dataRespond = await response.json();
        localStorage.setItem('token', dataRespond.jwt);
        localStorage.removeItem('expectFirstAuth');
        return dataRespond


    } catch (err) {
        console.error(err);
    }
    return null;
}




const isExpectedAuth = () => {
    if (localStorage.getItem('expectFirstAuth')) {
        console.log(localStorage.getItem('expectFirstAuth'));
        return true
    }
    else return false;
}

const isNoExpired = () => {
    const token = localStorage.getItem('token');
    console.log('isNoExpired');
    if (!jwt.decode((token as string))) {
        return false
    }
    const decoded = jwt.verify((token as string), (process.env.JWT_SECRET as string));
    const { expiration } = (decoded as { expiration: Date });
    const expirationFormat = new Date(expiration);

    if (expirationFormat < new Date()) {
        console.log('expiration is overtime');
        localStorage.removeItem('expectFirstAuth');
        return false;
    }
    else return true;
}





export default function* watchFirstAuthConnect() {
    console.log('watchFirstAuthConnect');
    localStorage.setItem('expectFirstAuth', 'expectFirstAuth');
    const token = localStorage.getItem('token');


    const test = yield call(fetchTest, (token as string));

    if (isNoExpired() && isExpectedAuth()) {
        try {
            const user = yield call(fetchToken, (localStorage.getItem('token') as string));
            yield put({ type: actionsList.SET_AUTH_USER_DATA, user });
        } catch {
            throw new SyntaxError("fatch token to server error");
        }
    }
}

// add check when token is undefined;
// add remuve email, user in db