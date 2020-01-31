import { combineReducers } from 'redux';
import modalReducer from './modals/reducers';


export default combineReducers({
    modals: modalReducer,
});

