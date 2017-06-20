import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import * as Rx from 'rxjs/Rx';

@Injectable()
export class NodetsapiclientService {

  constructor(private http:Http) {

   }

   get(serviceUrl:string){
     let headers = new Headers();
     // token generated for auto0 nodetestapi from postman
     // https://auth0.com/docs/api/postman
     //C:\dev\vsdotcom\nodetsapi\nodetsapi
     headers.append('authorization', "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlJqTTNOekpHTXpFNE5FUTVNREV6UVRjM05UbEZOMFpFT1VOR1F6QkJPRFUwTUVNeE16UXhOQSJ9.eyJpc3MiOiJodHRwczovL21hdmUuZXUuYXV0aDAuY29tLyIsInN1YiI6ImN1NHBlN1M4Q3NsbkwzTng3U0Zpd2pXT3VTNDQxNmNDQGNsaWVudHMiLCJhdWQiOiJub2RldHNhcGlJZGVudGlmaWVyIiwiZXhwIjoxNDk3OTY5MDIzLCJpYXQiOjE0OTc4ODI2MjMsInNjb3BlIjoiIn0.QxKaOuSOvSm4diWQRkR9tbDvGHYPQiZnZhAzfzhNLMTG-Iv_EtdlYTPJil-CXQXxAnWktJD8G_K8xrtC0L1IsV3tIdzRx_HECcwUEDZjUV0ofU-DZTSRg2ezPXUitHCJilcrJoQ7y1ml_2xJurt7fEgdKYsXiQeOYCo4xYD4fFoChnpYQhGc82HWJ4PBOopNPFm51QWyNlAkjv5Pmqk5N6NF98-IygQruJDmaVIK9b_25uNB58CwDKgP0xkPWq6PTBUP9q7uVJqgcuHpsffxijhMdFa_Nhq3ewjDKaL3sT-lTSF-4Vq-45LqGDQeznltm-eG7lR4wteXCs_r1ILmWg") ;
     return this.http.get(serviceUrl, {headers: headers})
     
        .map((res)=> res.json())
        .catch((err)=> {
          console.log(err);
          return Rx.Observable.empty();
        })
      
   }
   createAuthorizationHeaders(headers: Headers){
      headers.append('Authorization', "Bearer eKnmnMpVhmvkMSj7JFshRKi_JO-Zd1KBFO2bK-ML5VEtSTJDjtRV4NAygdHhNfBT") 

   }

}
