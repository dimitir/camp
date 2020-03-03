import actionsApp from '../RootStore/dispatchActions';

import { ActionType, InitialStateType, TodoItemType } from '../RootStore/types';


const initialState: InitialStateType = {
    todoArr: [],
}


const todoReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case actionsApp.SET_INITIAL_TODO:
            return {
                ...state,
                todoArr: action.payloadInital
            }

        case actionsApp.ADD_NEW_TODO:
            
            state.todoArr.push(action.payload)
            return {
                ...state,
                todoArr: state.todoArr
            }

        case actionsApp.CHANGE_COPMPLETED:
            const changeTodoArr = (state.todoArr as TodoItemType[]).map(todo => {
                if (todo._id == action._id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                ...state,
                todoArr: changeTodoArr
            }

        case actionsApp.DELETE_TODO:
            const deleteTodoArr = (state.todoArr as TodoItemType[]).filter(todo => todo._id !== action._id);
            console.log(state);
            return {
                ...state,
                todoArr: deleteTodoArr
            }

        case actionsApp.EDIT_TODO:
            const editTodoArr = (state.todoArr as TodoItemType[]).map(todo => {
                if (todo._id == action.payload._id) {
                    todo.title = action.payload.title;
                    todo.discription = action.payload.discription;
                }
                return todo
            }

            );

            return {
                ...state,
                todoArr: editTodoArr
            }

        default: return state
    }
}

export default todoReducer;