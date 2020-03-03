
export interface TodoItemType {
    _id: string;
    title: string;
    discription: string;
    completed?: boolean;
}

export interface ActionTypeInitial {
    type: string;
    payloadInital: TodoItemType[];
}

export interface ActionTypeMake {
    type: string;
    payload: TodoItemType;
}

export interface ActionTypeUseId {
    type: string;
    _id: string;
}


export type FormData = {
    todoTitle: string;
    todoDiscription: string;
};


export interface InitialStateType {
    todoArr: any[] | TodoItemType[]
}

export interface ActionType extends ActionTypeUseId, ActionTypeMake, ActionTypeInitial { };