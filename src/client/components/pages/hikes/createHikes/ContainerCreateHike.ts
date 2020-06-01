import { connect, ConnectedProps } from 'react-redux';
// import { RootStateType } from '../../store/storeConfig/rootReducers';
import { Dispatch } from 'redux';
import { addHike } from '../../../../store/hikes/actions';
import CreateHike from './CreateHike';


const mapDispatchToProps = (dispatch: Dispatch) => ({
    addHike: (hike: any) => dispatch(addHike(hike)),

})

const connector = connect(null, mapDispatchToProps);


export type TypeProps_CreateHike = ConnectedProps<typeof connector>;

export default connector(CreateHike);