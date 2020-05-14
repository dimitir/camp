import dispatchActions from '../storeConfig/dispatchActionsList';
import { ShowModalType, CloseModalType } from '../storeConfig/types';


export const showModal = (modalType: string): ShowModalType => ({
    type: dispatchActions.SHOW_MODAL,
    modalType: modalType
})


export const closeModal = (): CloseModalType => ({
    type: dispatchActions.CLOSE_MODAL,
})


