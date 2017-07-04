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
     headers.append('authorization', "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlJqTTNOekpHTXpFNE5FUTVNREV6UVRjM05UbEZOMFpFT1VOR1F6QkJPRFUwTUVNeE16UXhOQSJ9.eyJpc3MiOiJodHRwczovL21hdmUuZXUuYXV0aDAuY29tLyIsInN1YiI6ImN1NHBlN1M4Q3NsbkwzTng3U0Zpd2pXT3VTNDQxNmNDQGNsaWVudHMiLCJhdWQiOiJub2RldHNhcGlJZGVudGlmaWVyIiwiZXhwIjoxNDk5MjU3MTE0LCJpYXQiOjE0OTkxNzA3MTQsInNjb3BlIjoiIn0.RWluRuHEEngUT16cz6r8MXV49MgxoeIsGSuF_UIBrWHHmyqUYXmWFZGZPoM4W3bFdYEkf67OMPf-W9CVkZ7cltAoAtF1GAe8aQoj5sL87YxP5h7wHY16QwZ7qck1i3oSJolvEH4uIrQmsHj5GJG7TGqDcnJU0PmKpRoVbBgu9LpLnGFWLq5Kib_0hp5ib2sbvc1Fx87oqsoEgs6PUVuIcgxxXjtpGfGiG6xTkG4mW-ZB8F1Sqou17BoeaFtD2-W5dCxNXIaHE45yc0hRWRFnuT8zoPJGolwo87F6QyYxUIDeRu1nXBNitsaDEp0HGWPWT4y__M_13GDKepApptbTNQ") ;
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
