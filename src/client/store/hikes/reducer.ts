import dispatchAction from '../storeConfig/dispatchActionsList';
import { ActionTypeHike, Ihike } from './types';


export interface InitialStateHike {
    added: boolean;
    hikes: [Ihike],
}

const initialState = {
    added: false,
    hikes: []
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
        default: return state;
    }
}

export default hikeReducer;