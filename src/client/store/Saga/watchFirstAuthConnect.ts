import { take, call } from 'redux-saga/effects';
import jwt from 'jsonwebtoken';
import actionsList from '../_RootStore/dispatchActionsList';




async function fetchToken(tokenVal: string) {
    const data = {
        token: tokenVal
    }
    try {
        const response = await fetch('api/firstconnect', {
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
        // console.log(localStorage.getItem('token'));

    } catch (err) {
        console.error(err);
    }
}


export default function* watchFirstAuthConnect() {
    console.log('jjj');
    const token = localStorage.getItem('token');
    console.log(token);
    const user = yield call(fetchToken, (token as string));
    
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
            }


        } catch (err) {
            console.error(err);
        }

    }
}