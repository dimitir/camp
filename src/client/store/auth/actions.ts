import dispatchActions from '../_RootStore/dispatchActionsList';
import { TypeSendEmail, TypeSendCodeSocialAuth, TypeSetUserData } from '../_RootStore/types';

// change store
export const sendEmail = (email: string): TypeSendEmail => ({
    type: dispatchActions.LOGIN_SEND_EMAIL,
    email: email
});

export const manageCallBackEmailAuth = (token: string) => ({
    type: dispatchActions.MANAGE_CALL_BACK_EMAIL_AUTH,
    token: token
})

export const sendCodeGoogleAuth = (code: string): TypeSendCodeSocialAuth => ({
    type: dispatchActions.SEND_AUTH_CODE_TO_GOOGLE,
    code: code
});

export const sendCodeFacebookAuth = (code: string): TypeSendCodeSocialAuth => ({
    type: dispatchActions.SEND_AUTH_CODE_TO_FACEBOOK,
    code: code
});

// change store
export const setAuthUserData = (user: any): TypeSetUserData => ({
    type: dispatchActions.SET_AUTH_USER_DATA,
    user: user
});