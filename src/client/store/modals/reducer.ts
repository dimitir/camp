import dispatchAction from '../_RootStore/dispatchActions';
import { ShowModalType } from '../_RootStore/types';

const initialState = {
    showModal: false,
    typeModal: ''
}

const modalsReducer = (state = initialState, action: ShowModalType) => {
    switch (action.type) {
        case dispatchAction.SHOW_MODAL:
            return {
                ...state,
                showModal: true,
                typeModal: action.modalsSingPayload.modalType
            }

        case dispatchAction.CLOSE_MODAL:
            return {
                ...state,
                showModal: false,
            }

        default: return state;
    }
}

export default modalsReducer;