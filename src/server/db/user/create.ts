import { UserModel } from '../schema';
import { TypeCreateUserProvider } from '../Types';

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




const createUserFromProvider = async ({
    jwt,
    email,
    provider,
    providerId,
    firstName,
    lastName,
    displayName,
    picture,
    locale
}: TypeCreateUserProvider
) => {

    console.log(displayName);
    console.log('displayName');

    const userAuthData = {
        jwt,
        email: email,
        auth: true,
        provider,
        providerId,
        firstName,
        lastName,
        displayName,
        picture,
        locale
    };
    const authFirst = await UserModel.create(userAuthData);
    const user = await authFirst.save();
    console.log('user');
    console.log(user);
    return user;
}

export {
    createUser,
    createUserFromProvider  
}
