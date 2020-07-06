import { call, take, put } from 'redux-saga/effects';
import actionsList from '../../storeConfig/dispatchActionsList';
import axios from 'axios';
import env from '../../../../env';





async function fetchHike(id: string) {

    const { data } = await axios({
        url: `${env.host}/hike/getOne`,
        method: 'post',
        data: { id }
    })

    console.log(data);
    return data
}







function* watchQueryHike() {
    while (true) {

        let hike;
        try {
            const { hikeId } = yield take(actionsList.QUERY_HIKE);
            console.log('hikehikehikehike');
            console.log(hike);
            hike = yield call(fetchHike, hikeId);
        }
        catch (e) { new Error(e) }

        try { yield put({ type: actionsList.SET_HIKE, hike: hike }) }
        catch{
            new Error('watchQueryHike');
        }

    }

}

export default watchQueryHike