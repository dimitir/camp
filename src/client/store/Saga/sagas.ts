 import { put, takeEvery, all, take, select, fork, call } from 'redux-saga/effects';
 import watchUserSendEmail from './watchUserSendEmail';



export default function* rootSaga() {
    yield all([
        watchUserSendEmail()

    ])
}
