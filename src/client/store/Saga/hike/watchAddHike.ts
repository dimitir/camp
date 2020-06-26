import { call, take, put } from 'redux-saga/effects';
import actionsList from '../../storeConfig/dispatchActionsList';
import axios from 'axios';
import env from '../../../../env';

async function fetchAddHike(hike: any) {
    console.log('fetch');
    const { data } = await axios({
        url: `${env.host}/hike/add`,
        method: 'post',
        data: { hike: hike },
    });
    return data
};




export default function* watchAddHike() {
    while (true) {
        try {
            const { hike } = yield take(actionsList.ADD_HIKE);
            console.log(hike);
            const data = yield call(fetchAddHike, hike);
            console.log(data);
            if (data == 'OK') {
                console.log('hello ok');
                yield put({ type: actionsList.HIKE_ADDED, added: true })
            }
        }
        catch{ new Error('watchAddHike') }
    }
}

