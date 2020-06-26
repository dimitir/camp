import { combineReducers } from 'redux';
import modalsReducer from '../modals/reducer';
import authUserReducer from '../auth/reducer';
import hikeReducer, { InitialStateHike } from '../hikes/reducer';

import { InitialStateModals, InitialStateUser } from './types';


const rootReducer = combineReducers({
  modal: modalsReducer,
  user: authUserReducer,
  hike: hikeReducer,
});


export interface RootStateType {
  modal: InitialStateModals;
  user: InitialStateUser;
  hike: InitialStateHike;
}

export default rootReducer;