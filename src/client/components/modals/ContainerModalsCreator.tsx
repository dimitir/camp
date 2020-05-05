import { connect, ConnectedProps } from 'react-redux';
import { RootStateType } from '../../store/_RootStore/rootReducers';
import { Dispatch } from 'redux';
import { closeModal, showModal } from '../../store/modals/actions';
import { sendEmail } from '../../store/auth/actions';
import ModalsCreator from './ModalsCreator';


const mapStateToProps = (state: RootStateType) => ({
    open: state.modal.showModal,
    typeModal: state.modal.typeModal,
})


const mapDispatchToProps = (dispatch: Dispatch) => ({
    handleClose: () => dispatch(closeModal()),
    handleShowModal: (nameModal: string) => dispatch(showModal(nameModal)),
    handleSendEmail: (email: string) => dispatch(sendEmail(email)),
});


const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);


export type PropsTypes_Modal = ConnectedProps<typeof connector>;
export type PropsTypesModalSingAll = Omit<PropsTypes_Modal, 'typeModal' | 'handleSendEmail'>;
export type PropsTypesModalSingEmail = Omit<PropsTypes_Modal, 'typeModal'>;
export type PropsTypesModalCheckYouInbox =
    Omit<PropsTypes_Modal, 'typeModal' | 'handleSendEmail' | 'handleShowModal'>;
export type PropsTypes_SingAll = Pick<PropsTypes_Modal, 'handleShowModal'>;



/* export type Props = PropsFromRedux & {
    backgroundColor: string
} */

export default connector(ModalsCreator);