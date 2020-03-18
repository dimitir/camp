import dispatchActions from '../_RootStore/dispatchActionsList';
import { TypeSendEmail } from '../_RootStore/types';


export const sendEmail = (email: string): TypeSendEmail => ({
    type: dispatchActions.SING_UP_SEND_EMAIL,
    email: email
})