import dispatchAction from '../storeConfig/dispatchActionsList';
import { ActionTypeHike, Ihike } from './types';


export interface InitialStateHike {
    added: boolean;
    hikes: [Ihike],
    hike: Ihike
}

const initialState = {
    added: false,
    hikes: [],
    hike: {}
}



const hikeReducer = (state = initialState, action: ActionTypeHike) => {
    switch (action.type) {
        case dispatchAction.HIKE_ADDED:
            return {
                ...state,
                added: action.added,
            }
        case dispatchAction.HIKES_LIST:
            return {
                ...state,
                hikes: action.hikes
            }
        case dispatchAction.SET_HIKE:
            return {
                ...state,
                hike: action.hike
            }
            
        default: return state;
    }
}

export default hikeReducer;