import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

export interface BroadcastEvent {
    key:any;
    data:any;
}

@Injectable()
export class BroadcasterService {
    private _eventBus: Subject<BroadcastEvent>

    constructor(){
        this._eventBus = new Subject<BroadcastEvent>();
    }

    broadcast(key:any, data?:any){
        this._eventBus.next({key,data})
    }

    on<T>(key:any):Observable<T> {
        return this._eventBus.asObservable()
                .map(event => <T>event.data)
    }
}

 
