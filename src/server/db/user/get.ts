export { };
const { UserModel } = require('../schema.ts');

const findUserByEmail = async (userEmail: string) => {
    await UserModel.find({ email: userEmail })
};


const findUserByIdAndUpdate = async (id: string, newJwt: string, authTrue: boolean) => {
    await UserModel.findOneAndUpdate(id, { jwt: newJwt, auth: authTrue });
}


module.exports = {
    findUserByEmail,
    findUserByIdAndUpdate
}