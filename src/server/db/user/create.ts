const { UserModel } = require('../schema.ts');


const createUser = async (token: string, email: string) => {

    const userAuthData = {
        jwt: token,
        email: email,
        auth: false
    };

    const authFirst = await UserModel.create(userAuthData);
    await authFirst.save();
}

module.exports = {
    createUser,
}
