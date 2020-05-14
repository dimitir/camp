import dispatchAction from '../storeConfig/dispatchActionsList';
import { ShowModalType } from '../storeConfig/types';

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
                typeModal: action.modalType
            }

        case dispatchAction.CLOSE_MODAL:
            return {
                ...state,
                showModal: false,
                typeModal: '',
            }

        default: return state;
    }
}

export default modalsReducer;