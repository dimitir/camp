import { take, call } from 'redux-saga/effects';
import jwt from 'jsonwebtoken';
import actionsList from '../_RootStore/dispatchActionsList';

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
        const response = await fetch('api/auth/setRegularToken', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(data)
        })

        const dataRespond = await response.json();

        console.group('dataRespond');
        console.group(dataRespond);

        localStorage.setItem('token', dataRespond.jwt);
        localStorage.removeItem('expectFirstAuth');

    } catch (err) {
        console.error(err);
    }
}




const isExpectedAuth = (markLocalExpected: string) => {
    if (!localStorage.getItem(markLocalExpected)) {
        console.log('keke');
        console.log(localStorage.getItem(markLocalExpected));
        return true
    }
    else return false;
}

const isNoExpired = () => {
    const token = localStorage.getItem('token');
    console.log('isNoExpired');
    console.log(token);
    if (!jwt.decode((token as string))) {
        console.log('ret');
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

    // const expectFirstAuth = localStorage.setItem('expectFirstAuth', 'expectFirstAuth');

    const token = localStorage.getItem('token');
    console.log(token);


    const test = yield call(fetchTest, (token as string));

    if (isExpectedAuth('expectFirstAuth') && isNoExpired()) {
        console.log('kjlk');
        try {
            console.log('DO fetch');
            const user = yield call(fetchToken, (localStorage.getItem('token') as string));
        } catch {
            throw new SyntaxError("fatch token to server error");
        }
    }
}


// add check when token is undefined;
// add remuve email, user in db