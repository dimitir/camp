import dispatchActions from '../_RootStore/dispatchActionsList';
import { ShowModalType, CloseModalType } from '../_RootStore/types';


export const showModal = (modalType: string): ShowModalType => ({
    type: dispatchActions.SHOW_MODAL,
    modalsSingPayload: {
        visible: true,
        modalType: modalType
    }
})


export const closeModal = (): CloseModalType => ({
    type: dispatchActions.CLOSE_MODAL,
})


 