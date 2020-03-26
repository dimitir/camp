import { put, takeEvery, all, take, select, fork, call } from 'redux-saga/effects';
import watchUserSendEmail from './watchUserSendEmail';
import watchFirstAuthConnect from './watchFirstAuthConnect';


export default function* rootSaga() {
    yield all([
        watchUserSendEmail(),
        watchFirstAuthConnect()
    ])
}
