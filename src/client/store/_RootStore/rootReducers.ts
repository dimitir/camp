import { combineReducers } from 'redux';
import modalsReducer from '../modals/reducer';
import authUserReducer from '../auth/reducer';
import { InitialStateModals, InitialStateUser } from './types';


const rootReducer = combineReducers({
  modal: modalsReducer,
  user: authUserReducer
});


export interface RootStateType {
  modal: InitialStateModals;
  user: InitialStateUser
}

export default rootReducer;