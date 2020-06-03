import mongoose from 'mongoose';



const Hike = new mongoose.Schema({
    name: String,
    start: Date,
    finish: Date,
    subscription: String,
    providerId: String,
    discription: Array,
    teamInfo: Array,
    isVisible: Boolean,
});

export const UserModel = mongoose.model("goHome", Hike);

