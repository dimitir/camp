import { connect, ConnectedProps } from 'react-redux';
// import { RootStateType } from '../../store/storeConfig/rootReducers';
import { Dispatch } from 'redux';
import { addHike, hikeAdded } from '../../../../store/hikes/actions';
import CreateHike from './CreateHike';
import { RootStateType } from '../../../../store/storeConfig/rootReducers';



const mapStateToProps = (state: RootStateType) => ({
    user: state.user.user,
    added: state.hike.added,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addHike: (hike: any) => dispatch(addHike(hike)),
    handleAdded: (added: boolean) => dispatch(hikeAdded(added))
})

const connector = connect(mapStateToProps, mapDispatchToProps);


export type TypeProps_CreateHike = ConnectedProps<typeof connector>;

export default connector(CreateHike);