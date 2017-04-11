import { Injectable,OnInit } from '@angular/core';
//import { Response} from '@angular/Http';
import { Http, Response } from '@angular/http';
import *as Rx from 'rxjs/Rx';
import 'rxjs/operator/map';

@Injectable()
export class VideoService implements OnInit {
 
  constructor(private _http:Http) { 
    
  }

  ngOnInit() {}

  get(serviceUrl:string){
    return this._http.get(serviceUrl)
    .map((res:Response)=> res.json())
    .catch((err)=> {
      console.log(err);
      return Rx.Observable.empty();
    })
    
  }
}
