import { connect, ConnectedProps } from 'react-redux';
// import { RootStateType } from '../../store/storeConfig/rootReducers';
import { Dispatch } from 'redux';
// import { } from '../../store/trails/actions';
import CreateHike from './CreateHike';


const mapDispatchToProps = (dispatch: Dispatch) => ({

})

const connector = connect(null, mapDispatchToProps);


export type TypeProps_CreateHike = ConnectedProps<typeof connector>;

export default connector(CreateHike);