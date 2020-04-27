import mongoose from 'mongoose';

/* const subSchema = new mongoose.Schema({
    provider: String,
    providerId: String,
    firstName: String,
    lastName: String,
    displayName: String,
}, { _id: false });


const User = new mongoose.Schema({
    jwt: String,
    email: String,
    auth: Boolean,
    providers: [subSchema],
}); */


/* 


еще я только вижу дорогу тут можно идти душей и в жизни я сохраню это и простоту. а куда далее, аниманция,авиация, 
правительство, целительство, живопись, я не знаю. Сказительство и рассуждения это да, это в светлую жизнь.
*/

const User = new mongoose.Schema({
    jwt: String,
    email: String,
    auth: Boolean,
    provider: String,
    providerId: String,
    firstName: String,
    lastName: String,
    displayName: String,
    picture: String,
    locale: String
});

export const UserModel = mongoose.model("ecoUsers", User);

