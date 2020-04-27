import keyMirror from 'keymirror';


const actionsApp = keyMirror({
    SHOW_MODAL: true,
    CLOSE_MODAL: true,
    CURRENT_USER: true,
    LOGIN_SEND_EMAIL: true,
    SEND_AUTH_CODE_TO_GOOGLE: true,
    SET_AUTH_USER_DATA: true,
});

export default actionsApp;
