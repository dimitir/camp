import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import HikeOne from './HikeOne';
import { queryHike } from '../../../../store/hikes/actions';

import { RootStateType } from '../../../../store/storeConfig/rootReducers';


const MapDispatchToProps = (dispatch: Dispatch) => ({
    queryHike: (hikeId: string) => dispatch(queryHike(hikeId))
});

const MapStateToProps = (state: RootStateType) => ({
    hike: state.hike.hike,
})


const connector = connect(MapStateToProps, MapDispatchToProps);


export type TypeProps_HikeOne = ConnectedProps<typeof connector>;


export default connector(HikeOne);


