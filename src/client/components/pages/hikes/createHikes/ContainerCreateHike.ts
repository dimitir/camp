import { connect, ConnectedProps } from 'react-redux';
// import { RootStateType } from '../../store/storeConfig/rootReducers';
import { Dispatch } from 'redux';
import { addHike } from '../../../../store/hikes/actions';
import CreateHike from './CreateHike';
import { RootStateType } from '../../../../store/storeConfig/rootReducers';



const mapStateToProps = (state: RootStateType) => ({
    user: state.user.user,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addHike: (hike: any) => dispatch(addHike(hike)),

})

const connector = connect(mapStateToProps, mapDispatchToProps);


export type TypeProps_CreateHike = ConnectedProps<typeof connector>;

export default connector(CreateHike);