import { Injectable,OnInit } from '@angular/core';
//import { Response} from '@angular/Http';
import { Http, Response } from '@angular/http';
import { VideoModel } from '../videos/shared/video.model';
import * as Rx from 'rxjs/Rx';
//import 'rxjs/operator/map';
//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class VideoService implements OnInit {
 
  constructor(private _http:Http) { }

  ngOnInit() {
    
  }

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


  public search(serviceUrl:string,terms: Rx.Observable<string>) {
     return terms.debounceTime(400)
     .distinctUntilChanged()
     .switchMap(term=>this.searchTerms(serviceUrl,term))
  }

  private searchTerms(serviceUrl:string, term: string) {
   return this.get(serviceUrl)
      .map((data)=> data.filter(video => this.searchWithRegExp(video.Subject,term) ))
  }

  private searchWithRegExp (strInput, strToFind): boolean {
    let reg = new RegExp(strToFind,'ig');
    return strInput.match(reg)? true:false;
  }

  private searchWithIncludes(strInput,strToFind): boolean {
    return strInput.includes(strToFind);
  }

  
}
