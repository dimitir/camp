import { put, takeEvery, all, take, select, fork, call } from 'redux-saga/effects';
import actionsApp from '../RootStore/dispatchActions';
import { TodoItemType } from '../RootStore/types';
import mongoose from 'mongoose'


interface ObjectId extends mongoose.Document {
    str: string;
}

interface PayloadWorkAdd {
    _id: ObjectId;
    title: string;
    decription: string;
    completed: boolean;
}

interface ActionWorkAdd {
    type: string;
    payload: PayloadWorkAdd;

}


async function fetchAddTodo(data: PayloadWorkAdd) {
    try {
        const response = await fetch('/api/todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(data)
        });
        const dataRes = await response.text();
        const json = dataRes === "" ? {} : JSON.parse(dataRes);
        return json;
    } catch (err) {
        console.error(err);
    }

}




function* workAdd(action: ActionWorkAdd) {
    const data = yield call(fetchAddTodo, action.payload);
    console.log(data);
}

export default function* watchAddTodo() {
    yield takeEvery(actionsApp.ADD_NEW_TODO, workAdd);
}