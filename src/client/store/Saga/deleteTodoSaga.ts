import { put, takeEvery, all, take, select, fork, call } from 'redux-saga/effects';
import actionsApp from '../RootStore/dispatchActions';
import { TodoItemType } from '../RootStore/types';
import mongoose from 'mongoose'


interface ObjectId extends mongoose.Document {
    str: string;
}


interface ActionWorkDel {
    type: string;
    _id: ObjectId;

}

async function fetchDeleteTodo(id: ObjectId) {
    try {
        const response = await fetch('/api/todo/' + id, {
            method: 'DELETE',
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




function* workDeleteTodo(action: ActionWorkDel) {
    console.log(action);
    const data = yield call(fetchDeleteTodo, action._id);
    console.log(data);
}

export default function* watchAddTodo() {
    yield takeEvery(actionsApp.DELETE_TODO, workDeleteTodo);
}