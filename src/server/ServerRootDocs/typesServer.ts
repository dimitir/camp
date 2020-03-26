
export interface authUserItem {
    jwt: String;
    email: String,
    auth: Boolean;
}


export interface jwtStrategySingature {
    token: {
        email: String;
        expiration: Date;
    };
    done: (err: any, id?: number | boolean) => void;
}

