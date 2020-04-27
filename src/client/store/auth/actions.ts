import dispatchActions from '../_RootStore/dispatchActionsList';
import { TypeSendEmail, TypeSendCodeGoogleAuth, TypeSetUserData } from '../_RootStore/types';


export const sendEmail = (email: string): TypeSendEmail => ({
    type: dispatchActions.LOGIN_SEND_EMAIL,
    email: email
});

export const sendCodeGoogleAuth = (code: string): TypeSendCodeGoogleAuth => ({
    type: dispatchActions.SEND_AUTH_CODE_TO_GOOGLE,
    code: code
});

export const setAuthUserData = (user: any): TypeSetUserData => ({
    type: dispatchActions.SET_AUTH_USER_DATA,
    user: user
});