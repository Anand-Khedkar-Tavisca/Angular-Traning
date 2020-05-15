import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  // the event that will be emitted by sender and
  // will be subscribed by the receiver
    emitValue: EventEmitter<number>;

    currentCustomers: EventEmitter<Array<number>>;

    currentSearch: EventEmitter<string>;


    constructor(){
       this.emitValue = new EventEmitter<number>();

       this.currentCustomers = new EventEmitter<Array<number>>();

       this.currentSearch = new EventEmitter<string>();


    }
    // method that emits event. This method will be called
    // by sender
    onEmiteValue(data: number): void {
        this.emitValue.emit(data);
    }

    onCurrentCustomers(data: Array<number>): void {
      this.currentCustomers.emit(data);
    }

    onCurrentSearch(data: string): void {
      this.currentSearch.emit(data);
    }
}
