const mongoose = require("mongoose");
import { Schema } from 'mongoose';
import { IUser } from './Types';


const subSchema: Schema = mongoose.Schema({
    _id: false,
    provider: String,
    providerId: String
});


const User: IUser = mongoose.Schema({
    jwt: String,
    email: String,
    auth: Boolean,
    providers: [subSchema]
});

module.exports.UserModel = mongoose.model("ecoAuths", User);



/*
var subSchema = mongoose.Schema({
    provider: String,
    id: String
}, { _id: false }); */