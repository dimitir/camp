import mongoose from 'mongoose';

const subSchema = new mongoose.Schema({
    provider: String,
    providerId: String
}, { _id: false });


const User = new mongoose.Schema({
    jwt: String,
    email: String,
    auth: Boolean,
    provider: String,
    providerId: String,
    firstName: String,
    lastName: String,
    displayName: String,
});

export const UserModel = mongoose.model("ecoUsers", User);
