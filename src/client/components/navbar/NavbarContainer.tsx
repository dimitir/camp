import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';

import Navbar from './Navbar';
import { showModal } from '../../store/modals/actions';
import { RootStateType } from '../../store/_RootStore/rootReducers';
import { userLogout } from '../../store/auth/actions';



const MapStateToProps = (state: RootStateType) => ({
    user: state.user.user
})

const MapDispatchToProps = (dispatch: Dispatch) => ({
    showModal: (name: string) => dispatch(showModal(name)),
    userLogout: () => dispatch(userLogout())
});


const connector = connect(MapStateToProps, MapDispatchToProps);


export type PropTypes_Navbar = ConnectedProps<typeof connector>;

export default connector(Navbar);