import dispatchAction from '../storeConfig/dispatchActionsList';
import { ActionTypeAuth } from '../storeConfig/types';

const initialState = {
    user: {},
    showEmail: '',
}

const authUserReducer = (state = initialState, action: ActionTypeAuth) => {
    switch (action.type) {
        case dispatchAction.SET_AUTH_USER_DATA:
            return {
                ...state,
                user: action.user,
            }
        case dispatchAction.USER_LOGOUT:
            return {
                ...state,
                user: {},
            }

        case dispatchAction.LOGIN_SEND_EMAIL:
            return {
                ...state,
                showEmail: action.email,
            }
        default: return state;
    }
}

export default authUserReducer;