import keyMirror from 'keymirror';


const actionsApp = keyMirror({
    SHOW_MODAL: true,
    CLOSE_MODAL: true,

    CURRENT_USER: true,
    
    LOGIN_SEND_EMAIL: true,
    SEND_AUTH_CODE_TO_GOOGLE: true,
    SEND_AUTH_CODE_TO_FACEBOOK: true,
    SET_AUTH_USER_DATA: true,
    USER_LOGOUT: true,
    MANAGE_CALL_BACK_EMAIL_AUTH: true,

    ADD_HIKE: true,
});

export default actionsApp;
