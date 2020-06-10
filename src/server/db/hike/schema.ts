import mongoose from 'mongoose';



const Hike = new mongoose.Schema({
    name: String,
    start: Date,
    finish: Date,
    subscription: String,
    providerId: String,
    discription: Array,
    teamInfo: Array,
    visible: Boolean,
    participans: Array,
    leaderEmail: String,
});

export const HikeSchema = mongoose.model("hike", Hike);

/* export interface IHeroModel extends mongoose.Document {
  name: string;
  power: string;
  amountPeopleSaved: number;
  createdAt: Date;
  modifiedAt: Date;
} */