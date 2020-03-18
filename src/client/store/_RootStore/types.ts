
export interface ShowModalType {
    type: string
    modalsSingPayload: {
        visible: boolean,
        modalType: string
    }
}

export interface InitialStateModals {
    showModal: boolean;
    typeModal: string;
}

export interface CloseModalType {
    type: string
}


export interface TypeSendEmail {
    type: string;
    email: string;
}


const initialState = {
    showModal: false,
    typeModal: ''
}

// export interface ActionType extends ActionTypeUseId, ActionTypeMake, ActionTypeInitial { };