import { combineReducers } from 'redux';
import modalsReducer from '../modals/reducer';
  import { InitialStateModals } from './types';


const rootReducer = combineReducers({
    modal: modalsReducer,
});

 
export interface RootStateType {
    modal: InitialStateModals
}  

export default rootReducer;