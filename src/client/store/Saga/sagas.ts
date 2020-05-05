import { put, takeEvery, all, take, select, fork, call } from 'redux-saga/effects';
import { watchUserSendEmail, watchFirstAuthConnect, watchSingUpGoogle, watchSingUpFacebook, watchActiveAuth } from './auth';


export default function* rootSaga() {
    yield all([
        watchUserSendEmail(),
        watchFirstAuthConnect(),
        watchSingUpGoogle(),
        watchSingUpFacebook(),
        watchActiveAuth()
    ])
}
