import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';

import Navbar from './Navbar';
import { showModal } from '../../store/modals/actions';
import { RootStateType } from '../../store/storeConfig/rootReducers';
import { userLogout } from '../../store/auth/actions';



const mapStateToProps = (state: RootStateType) => ({
    user: state.user.user
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    showModal: (name: string) => dispatch(showModal(name)),
    userLogout: () => dispatch(userLogout())
});


const connector = connect(mapStateToProps, mapDispatchToProps);


export type PropTypes_Navbar = ConnectedProps<typeof connector>;

export default connector(Navbar);