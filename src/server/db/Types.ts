import { Document } from 'mongoose';

interface Iproviders {
    provider: String,
    providerId: String
}
export interface IUser extends Document {
    email: String;
    jwt: String;
    auth: Boolean;
    providers: [Iproviders];
}
