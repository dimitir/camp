import { take, call } from 'redux-saga/effects';
import jwt from 'jsonwebtoken';
import actionsList from '../_RootStore/dispatchActionsList';


async function fetchTest(tokenVal: string) {
    const data = {
        token: tokenVal
    }
    try {
        const response = await fetch('api/auth/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(data)
        })
        const dataRespond = await response.json();

        // localStorage.setItem('token', dataRespond.jwt);
        console.log(dataRespond.text);

    } catch (err) {
        console.error(err);
    }
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

        localStorage.setItem('token', dataRespond.jwt);
        console.log('dataRespond');

    } catch (err) {
        console.error(err);
    }
}


export default function* watchFirstAuthConnect() {
    console.log('watchFirstAuthConnect');
    const token = localStorage.getItem('token');
    const expectFirstAuth = localStorage.getItem('expectFirstAuth');
    console.log(expectFirstAuth);
    const test = yield call(fetchTest, (token as string));

    localStorage.removeItem('expectFirstAuth');

    if (localStorage.getItem('expectFirstAuth') && localStorage.getItem('token')) {
        const token = localStorage.getItem('token');

        try {
            console.log(process.env.JWT_SECRET);
            const decoded = jwt.verify((token as string), (process.env.JWT_SECRET as string));
            const { expiration } = (decoded as { expiration: Date });
            const expirationFormat = new Date(expiration);

            if (expirationFormat < new Date()) {

                console.log('expiration is overtime');
                localStorage.removeItem('expectFirstAuth');
                return;
            }
            else {
                console.log('DO fetch');
                const user = yield call(fetchToken, (token as string));
                const test = yield call(fetchTest, (token as string));
            }


        } catch (err) {
            console.error(err);
        }

    }
}