import { HikeSchema } from './schema';

export const getHikes = async () => {
    return await HikeSchema.find({})
};