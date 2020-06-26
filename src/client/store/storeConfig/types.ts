
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




export interface ActionTypeAuth extends TypeSetUserData, TypeSendEmail { };
