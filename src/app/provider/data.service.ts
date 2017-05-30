import {Injectable, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import * as Rx from 'rxjs/Rx';
import { NotificationModel } from '../notification/notification.model';

@Injectable()
export class DataService implements OnInit{

    constructor(private http:Http){}
    
    ngOnInit(){}

    getData(serviceUrl:string):Rx.Observable<NotificationModel[]> {
        return this.http.get(serviceUrl)
            .map((res)=> res.json())
            .catch((err)=> {
                console.log(err);
                return Rx.Observable.empty();
        })
    }

}