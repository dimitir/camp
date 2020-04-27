import dispatchAction from '../_RootStore/dispatchActionsList';
import { ActionTypeAuth } from '../_RootStore/types';

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

        case dispatchAction.LOGIN_SEND_EMAIL:
            return {
                ...state,
                showEmail: action.email,
            }
        default: return state;
    }
}

export default authUserReducer;