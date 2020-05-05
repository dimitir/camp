import { connect, ConnectedProps } from 'react-redux';
import CallBackEmailAuth from './CallBackEmailAuth';
import { Dispatch } from 'Redux';
import { manageCallBackEmailAuth } from '../../../store/auth/actions';


const MapDispathToProps = (dispatch: Dispatch) => ({
    manageCallBackEmailAuth: (token: string) => dispatch(manageCallBackEmailAuth(token))
})

const connector = connect(null, MapDispathToProps);

export type PropsTypes_CallBack_Email = ConnectedProps<typeof connector>;

export default connector(CallBackEmailAuth);
