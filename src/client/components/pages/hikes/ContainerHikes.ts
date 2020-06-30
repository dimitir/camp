import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import Hikes from './Hikes';
import { RootStateType } from '../../../store/storeConfig/rootReducers';


const MapDispatchToProps = (dispatch: Dispatch) => ({

});

const MapStateToProps = (state: RootStateType) => ({
    hikes: state.hike.hikes,
})


const connector = connect(MapStateToProps, MapDispatchToProps);


export type TypeProps_HikeList = ConnectedProps<typeof connector>;


export default connector(Hikes);


