import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';

import Navbar from './Navbar';
import { showModal } from '../../store/modals/actions';
import modalName from '../../store/modals/modalNameConstants';



const MatDispatchProps = (dispatch: Dispatch) => ({
    openModal: (name: string) => dispatch(showModal(name))
})


const connector = connect(null, MatDispatchProps);


export type PropTypes_Navbar = ConnectedProps<typeof connector>;

export default connector(Navbar);