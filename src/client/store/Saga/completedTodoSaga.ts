import { put, takeEvery, all, take, select, fork, call } from 'redux-saga/effects';
import actionsApp from '../RootStore/dispatchActions';
import mongoose from 'mongoose'


interface ObjectId extends mongoose.Document {
    str: string;
}


interface ActionWorkDel {
    type: string;
    _id: ObjectId;

}

async function fetchChangeCompleted(id: ObjectId) {
    try {
        const response = await fetch('/api/todo/completed/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
        });
        const dataRes = await response.text();
        const json = dataRes === "" ? {} : JSON.parse(dataRes);
        return json;
    } catch (err) {
        console.error(err);
    }

}




function* workChangeCompleted(action: ActionWorkDel) {
    console.log(action);
    const data = yield call(fetchChangeCompleted, action._id);
    console.log(data);
}

export default function* watchChangeCompleted() {
    yield takeEvery(actionsApp.CHANGE_COPMPLETED, workChangeCompleted);
}