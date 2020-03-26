import { take, call } from 'redux-saga/effects';
import jwt from 'jsonwebtoken';
import actionsList from '../_RootStore/dispatchActionsList';

console.log('jwtSecret');

console.log(process.env.NODE_ENV);
console.log(process.env.MAIL_PASSWORD);
console.log(process.env.PORT);
const jwtSecret = process.env.JWT_SECRET;


async function fetchToken(tokenVal: string) {
    const data = {
        token: tokenVal
    }
    try {
        const response = await fetch('api/setTokenFront', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(data)
        })
        const dataRespond = await response.json();
        console.log('dataRespond');
        console.log(dataRespond);

        /* localStorage.setItem('token', dataRespond.jwt);
        localStorage.setItem('expectFirstAuth', 'expect'); */
        console.log(localStorage.getItem('token'));

    } catch (err) {
        console.error(err);
    }
}


export default function* watchFirstAuthConnect() {
    console.log('2222222222');
    console.log(localStorage.getItem('expectFirstAuth'));
    if (localStorage.getItem('expectFirstAuth') && localStorage.getItem('token')) {
        const token = localStorage.getItem('token');

        try {
            if (typeof token == 'string') {
                const decoded = jwt.verify((jwtSecret as string), token);
                console.log(token);
                console.log(decoded);
                const { expiration } = (decoded as { expiration: Date });


                if (expiration < new Date()) {
                    localStorage.removeItem('expectFirstAuth');
                    return;
                }
                else {
                    const user = yield call(fetchToken, (token as string));
                }
            }

        } catch (err) {
            console.error(err);
        }

    }
}