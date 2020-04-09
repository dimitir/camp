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

const getUserByProviderId = async (id: string) => {
    console.log('getUserByProviderId');
    return await UserModel.findOne({ providerId: id })
}

export {
    getUserByEmail,
    getUserByIdAndUpdate,
    getUserByProviderId
}