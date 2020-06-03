
export interface ShowModalType {
    type: string
    modalType: string
}
/* 
export interface ShowModalType {
    type: string
    modalsSingPayload: {
        visible: boolean,
        modalType: string
    }
} */

export interface InitialStateModals {
    showModal: boolean;
    typeModal: string;
}

export interface InitialStateUser {
    user: any
}

export interface CloseModalType {
    type: string
}


export interface TypeSendEmail {
    type: string;
    email: string;
}




export interface TypeSendCodeSocialAuth {
    type: string;
    code: string;
}


const initialState = {
    showModal: false,
    typeModal: ''
}



export interface TypeSetUserData {
    type: string;
    user: any;
}


interface Ihike {
    name: String;
    start: Date;
    finish: Date;
    subscription: String;
    discription: any;
    isVisible: Boolean;
    teamInfo: any;
}

export interface TypeAddHike {
    type: string;
    hike: Ihike;
}



export interface ActionTypeAuth extends TypeSetUserData, TypeSendEmail { };

