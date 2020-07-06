import dispatchActions from '../storeConfig/dispatchActionsList';
import { TypeAddHike, TypeHikesList, Ihike } from './types';


export const addHike = (hike: TypeAddHike) => ({
    type: dispatchActions.ADD_HIKE,
    hike: hike
})


export const hikeAdded = (added: boolean) => ({
    type: dispatchActions.HIKE_ADDED,
    added: added,
})

export const hikeList = (hikes: TypeHikesList) => ({
    type: dispatchActions.HIKES_LIST,
    hikes: hikes,
})

export const queryHike = (hikeId: string) => ({
    type: dispatchActions.QUERY_HIKE,
    hikeId: hikeId,
})


export const setHike = (hike: Ihike) => ({
    type: dispatchActions.SET_HIKE,
    hike: hike,
})







