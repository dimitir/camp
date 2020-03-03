import dispatchActions from '../RootStore/dispatchActions';
import { ActionTypeUseId, ActionTypeMake, TodoItemType, ActionTypeInitial } from '../RootStore/types';


export const putInitialData = (todoArr: TodoItemType[]): ActionTypeInitial => ({
    type: dispatchActions.SET_INITIAL_TODO,
    payloadInital: todoArr
})

export const addNewTodo = (todo: TodoItemType): ActionTypeMake => ({
    type: dispatchActions.ADD_NEW_TODO,
    payload: todo
})

export const changeCompeted = (id: string): ActionTypeUseId => ({
    type: dispatchActions.CHANGE_COPMPLETED,
    _id: id
})


export const deleteTodo = (id: string): ActionTypeUseId => ({
    type: dispatchActions.DELETE_TODO,
    _id: id
})


export const editTodo = (todo: TodoItemType): ActionTypeMake => ({
    type: dispatchActions.EDIT_TODO,
    payload: todo
})