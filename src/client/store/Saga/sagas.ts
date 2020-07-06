import { put, takeEvery, all, take, select, fork, call } from 'redux-saga/effects';
import { watchUserSendEmail, watchFirstAuthConnect, watchSingUpGoogle, watchSingUpFacebook, watchActiveAuth } from './auth';
import { watchAddHike, watchHikesList, watchQueryHike } from './hike';

export default function* rootSaga() {
    yield all([
        watchUserSendEmail(),
        watchFirstAuthConnect(),
        watchSingUpGoogle(),
        watchSingUpFacebook(),
        watchActiveAuth(),

        watchAddHike(),
        watchHikesList(),
        watchQueryHike()
    ])
}
