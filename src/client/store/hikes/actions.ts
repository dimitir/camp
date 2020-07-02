import dispatchActions from '../storeConfig/dispatchActionsList';
import { TypeAddHike, TypeHikesList } from './types';


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
    type: dispatchActions.GET_HIKE,
    hikeId: hikeId,
})
export const getHike = (hikeId: string) => ({
    type: dispatchActions.GET_HIKE,
    hikeId: hikeId,
})







