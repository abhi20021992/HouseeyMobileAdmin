// export class ResponseMessage {
//     Code: number;
//     Message: string;
//     Status: string;
// }


export interface ResponseMessage {
    Code: number;
    Message: string;
    Status: string;
}

export interface AppNotification{
    type: string,
    payload: string
}


export enum MESSAGE_TYPES {
    Notification = 1,
    
}
