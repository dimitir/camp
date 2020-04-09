import { UserModel } from '../schema';
import {TypeCreateUserProvider} from '../Types';

const createUser = async (
    token: string,
    email: string,
) => {
    const userAuthData = {
        jwt: token,
        email: email,
        auth: false,
    };
    const authFirst = await UserModel.create(userAuthData);
    return await authFirst.save();
}


 

const createUserProvider = async ({
    email,
    provider,
    providerId,
    firstName,
    lastName,
    displayName, }: TypeCreateUserProvider
) => {

    console.log(displayName);
    console.log('displayName');

    const userAuthData = {
        email: email,
        auth: false,
        provider: provider,
        providerId: providerId,
        firstName: firstName,
        lastName: lastName,
        displayName: displayName,
    };
    const authFirst = await UserModel.create(userAuthData);
    return await authFirst.save();
}


export {
    createUser,
    createUserProvider
}
