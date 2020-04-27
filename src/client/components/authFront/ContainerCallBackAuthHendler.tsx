import { connect, ConnectedProps } from 'react-redux';
import CallBackHendler from './CallBackAuthHendler';
import { Dispatch } from 'Redux';
import { sendCodeGoogleAuth } from '../../store/auth/actions';


const MapDispathToProps = (dispatch: Dispatch) => ({
    sendCodeToGoogle: (code: string) => dispatch(sendCodeGoogleAuth(code))
})

const connector = connect(null, MapDispathToProps);

export type PropsTypes_CallBack = ConnectedProps<typeof connector>;

export default connector(CallBackHendler);
