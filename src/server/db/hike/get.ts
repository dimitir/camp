import { UserModel } from './schema';

const getUserByEmail = async (userEmail: string) => {
    return await UserModel.findOne({ email: userEmail })
};


const getUserByIdAndUpdate = async (id: string, newJwt: string) => {
    const userData = await UserModel.findOneAndUpdate({ _id: id }, { jwt: newJwt, auth: true });
    return userData;
}



interface IgetUserByIdAndUpdateProvider {
    id: string;
    jwt: string;
    provider: string,
    providerId: string,
    firstName: string,
    lastName: string,
    picture: string,

}
const getUserByIdAndUpdateFromProvider =
    async ({ id, jwt, provider, providerId, firstName, lastName, picture }: IgetUserByIdAndUpdateProvider) => {
        const userData = await UserModel.findOneAndUpdate({ _id: id }, {
            $set: {
                jwt: jwt,
                auth: true,
                provider: provider,
                providerId: providerId,
                firstName: firstName,
                lastName: lastName,
                picture: picture
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

export { getUserByEmail, getUserByIdAndUpdate, getUserByProviderId, getUserByIdAndUpdateFromProvider };

