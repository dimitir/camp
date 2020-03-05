import ModalsCreator from './ModalsCreator';
import { connect, ConnectedProps } from 'react-redux';
import { RootStateType } from '../../store/_RootStore/rootReducers';
import { Dispatch } from 'redux';
import { closeModal } from '../../store/modals/actions';


const mapStateToProps = (state: RootStateType) => ({
    open: state.modal.showModal
})






const mapDispatchToProps = (dispatch: Dispatch) => ({
    handleClose: () => dispatch(closeModal())
})


const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);


export type PropsTypes_Modal = ConnectedProps<typeof connector>;

/* export type Props = PropsFromRedux & {
    backgroundColor: string
} */

export default connector(ModalsCreator);