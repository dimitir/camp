import { Document } from 'mongoose';

interface Iproviders {
    provider: String,
    providerId: String
}
export interface IUser extends Document {
    email: String;
    jwt: String;
    auth: Boolean;
    providers: [{
        provider: String,
    providerId: String
    }];
}


export interface TypeCreateUserProvider {
    email: string,
    provider: string,
    providerId: string,
    firstName: string,
    lastName: string,
    displayName: string,
}