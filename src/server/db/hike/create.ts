import { HikeSchema } from './schema';
import { TypeHike } from './Types';


const createHike = async (hike: TypeHike) => {
    console.log('hikeCreate');
    console.log(hike);
    const authFirst = await HikeSchema.create(hike);
    return await authFirst.save();
}


console.log('AddHike');
console.log(createHike);

export {
    createHike,
}
