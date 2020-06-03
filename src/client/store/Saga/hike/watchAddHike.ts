import { call, take, put } from 'redux-saga/effects';
import actionsList from '../../storeConfig/dispatchActionsList';
import axios from 'axios';
import env from '../../../../env';


async function fetchAddHike(hike: any) {
    console.log('fetch');
    const { data } = await axios({
        url: `${env.host}/hike/add`,
        method: 'post',
        data: hike,
    });
    console.log(data); // { access_token, token_type, expires_in }
    return data.access_token;
};




export default function* watchAddHike() {
    while (true) {
        try {
            const { hike } = yield take(actionsList.ADD_HIKE);
            console.log(hike);
            yield call(fetchAddHike, hike);
        }
        catch{ new Error('watchAddHike') }
    }
}

