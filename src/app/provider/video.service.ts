import { Injectable,OnInit } from '@angular/core';
//import { Response} from '@angular/Http';
import { Http, Response } from '@angular/http';
import { VideoModel } from '../videos/shared/video.model';
import * as Rx from 'rxjs/Rx';
import 'rxjs/operator/map';

@Injectable()
export class VideoService implements OnInit {
 
  constructor(private _http:Http) { }

  ngOnInit() {}

  get(serviceUrl:string): Rx.Observable<VideoModel[]>{
    return this._http.get(serviceUrl)
    .map((res) => this.extractData(res))
    .catch((err)=> {
      return this.handleError(err);
    })
  }
  
  extractData(res:Response) {
    let body = res.json();
    return body;
  }

  handleError(err:any) {
      console.log(err);
      return Rx.Observable.empty();
  }

  getById(serviceUrl:string, videoId: string){
    return this.get(serviceUrl)
      .map((data)=> data.filter((video) => video.Id === parseInt(videoId)));
  }
}
