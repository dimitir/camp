import { take, call, put } from 'redux-saga/effects';
import axios from 'axios';
import env from '../../../../env'
import actionsList from '../../storeConfig/dispatchActionsList';


async function fatchHikes() {
    const { data } = await axios({
        url: `${env.host}/hike/list`,
        method: 'post',
    })
    return data;
}


export default function* watchHikesList() {

    try {
        const hikes = yield call(fatchHikes);
        const newState = yield put({ type: actionsList.HIKES_LIST, hikes })
        console.log(newState);
    }
    catch{ new Error('watchHikesList') }
}