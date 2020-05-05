import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';

import Navbar from './Navbar';
import { showModal } from '../../store/modals/actions';
import { RootStateType } from '../../store/_RootStore/rootReducers';



const MapStateToProps = (state: RootStateType) => ({
    user: state.user.user
})

const MapDispatchToProps = (dispatch: Dispatch) => ({
    showModal: (name: string) => dispatch(showModal(name))
});


const connector = connect(MapStateToProps, MapDispatchToProps);


export type PropTypes_Navbar = ConnectedProps<typeof connector>;

export default connector(Navbar);