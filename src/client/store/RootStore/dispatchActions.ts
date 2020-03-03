import keyMirror from 'keymirror'


const actionsApp = keyMirror({
    SET_INITIAL_TODO: true,
    ADD_NEW_TODO: true,
    CHANGE_COPMPLETED: true,
    DELETE_TODO: true,
    EDIT_TODO: true,
});

export default actionsApp;
