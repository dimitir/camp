import dispatchActions from '../storeConfig/dispatchActionsList';
import { TypeAddHike } from '../storeConfig/types';



export const addHike = (hike: TypeAddHike) => ({
    type: dispatchActions.ADD_HIKE,
    hike: hike
}
)