const { UserModel } = require('../schema.ts');

const getUserByEmail = async (userEmail: string) => {
    return await UserModel.findOne({ email: userEmail })
};


const getUserByIdAndUpdate = async (id: string, newJwt: string, authTrue: boolean) => {
    console.log('findUserByIdAndUpdate');
    console.log(id, newJwt, authTrue);
    const userData = await UserModel.findOneAndUpdate({ _id: id }, { jwt: newJwt, auth: authTrue });
    console.log('userData');
    console.log(userData);
    return userData;
}



interface IgetUserByIdAndUpdateProvider {
    id: string;
    jwt: string;
    authTrue?: boolean;
    provider?: string,
    providerId?: string,
    firstName?: string,
    lastName?: string,
    displayName?: string,
    locale?: string
}
const getUserByIdAndUpdateFromProvider =
    async ({ id, jwt, authTrue, provider, providerId, firstName, lastName, displayName, locale }: IgetUserByIdAndUpdateProvider) => {
        console.log(id, provider, authTrue, displayName);
        const userData = await UserModel.findOneAndUpdate({ _id: id }, {
            $set: {
                jwt: jwt,
                auth: true,
                provider: provider,
                providerId: providerId,
                firstName: firstName,
                lastName: lastName,
                displayName: displayName,
                locale: locale
            }
        }, { new: true });
        console.log('userData');
        console.log(userData);
        return userData;
    }

const getUserByProviderId = async (id: string) => {
    console.log('getUserByProviderId');
    return await UserModel.findOne({ providerId: id })
}

export {
    getUserByEmail,
    getUserByIdAndUpdate,
    getUserByProviderId,
    getUserByIdAndUpdateFromProvider
}