import dispatchAction from '../_RootStore/dispatchActionsList';
import { TypeSendEmail } from '../_RootStore/types';

const initialState = {
    email: '',

}

const modalsReducer = (state = initialState, action: TypeSendEmail) => {
    switch (action.type) {
        case dispatchAction.SING_UP_SEND_EMAIL:
            return {
                ...state,
                email: action.email,
            }
        default: return state;
    }
}

export default modalsReducer;