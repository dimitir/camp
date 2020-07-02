export interface Ihike {
    _id: string;
    name: String;
    start: Date;
    finish: Date;
    subscription: String;
    discription: any;
    openEvent: Boolean;
    teamInfo: any;
    eco: Boolean,
    difficulty: String,
    typeHike: String,
    region: String,
    country: String,
    leaderEmail: String
}

export interface TypeAddHike {
    type: string;
    hike: Ihike;
}

export interface TypeHikesList {
    type: string;
    hikes: [Ihike];
}

// export interface ActionTypeAuth extends TypeSetUserData, TypeSendEmail { };
export interface TypeAdded {
    type: string;
    added: boolean;
};

export interface ActionTypeHike extends TypeAdded, TypeHikesList { }