import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';



export interface Message {
  type: number;
  payload: any;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

    constructor() { }
    message$ = new Subject<any>();

    sendMessage(message: Message) {
        this.message$.next(message);
    }

    clearMessage() {
        this.message$.next(null);
    }

    getMessage(): Observable<any> {
        return this.message$.asObservable();
    }
}
