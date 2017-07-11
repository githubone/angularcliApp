import { Component, OnInit } from '@angular/core';
import { Nodetsapiauth0clientService }  from '../provider/nodetsapiauth0client.service';
//https://github.com/angular/angular/blob/4.1.x/packages/common/src/location/location.ts
import { Location } from '@angular/common';
import { BroadcasterService} from '../provider/broadcaster.service';
import { SessionStorageService } from 'ngx-webstorage';
import { LOGIN_CONFIG } from '../config/login.config';

@Component({
  selector: 'app-auth0login',
  templateUrl: './auth0login.component.html',
  styleUrls: ['./auth0login.component.css']
})
export class Auth0loginComponent implements OnInit {
  auth0Hash:string;
  userMessage:string;
  constructor(private location: Location,
            private authService: Nodetsapiauth0clientService,
            private broadcaster: BroadcasterService,
            private sessionStorage : SessionStorageService)
            { }

  ngOnInit() {
    let auth0Login = this.sessionStorage.retrieve(LOGIN_CONFIG.userKey);
    if(auth0Login == null){
          if (location.hash.length > 0) {
             this.handleInitForAuth0Callback();
          } else {
             this.handleInitForNotLoginAuth0();
        }
    } else {
      this.handleInitForAlreadyLoginAuth0(auth0Login);
    }
   
  }

  handleInitForNotLoginAuth0(){
     this.userMessage = "You are NOT authenticated and will be redirected to the login page";
     this.authService.login();
  }

  handleInitForAuth0Callback() {
      console.log('call back from auth0');
      this.userMessage = "You are authenticated. Please wait for the page to load..";
      this.auth0Hash = location.hash;
      this.processAuth0Login();
  }

  handleInitForAlreadyLoginAuth0(auth0Login:any){
     this.broadcastAuth0Login(auth0Login);
  }

  processAuth0Login(){
      //extract
      let auth0Login = this.extractAuth0Login();
      // store
      this.sessionStorage.store(LOGIN_CONFIG.userKey, auth0Login);
      // broadcast
      this.broadcastAuth0Login(auth0Login);
  }

  broadcastAuth0Login(isAuth0Login:boolean){
      this.broadcaster.broadcast(LOGIN_CONFIG.userKey,isAuth0Login);
  }

  extractAuth0Login(){
     // use this.auth0Hash
     // TO DO: extract info from hash string
     return this.auth0Hash.length > 0;
  }

  

}
