import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'Redux';
import { sendCodeFacebookAuth } from '../../../store/auth/actions';
import CallBackFacebookAuth from './CallBackFacebookAuth';


const MapDispatchToProps = (dispath: Dispatch) => ({
  sendCodeToFacebook: (code: string) => dispath(sendCodeFacebookAuth(code))
})


const connector = connect(null, MapDispatchToProps);

export type PropsTypes_CallBack = ConnectedProps<typeof connector>;

export default connector(CallBackFacebookAuth)