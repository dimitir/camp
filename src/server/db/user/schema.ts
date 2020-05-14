import mongoose from 'mongoose';


const User = new mongoose.Schema({
    jwt: String,
    email: String,
    auth: Boolean,
    provider: String,
    providerId: String,
    firstName: String,
    lastName: String,
    picture: String,
});

export const UserModel = mongoose.model("ecoUsers", User);

