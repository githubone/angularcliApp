import { Component, OnInit,AfterViewInit, ViewChild,ElementRef } from '@angular/core';
import { LoginModel, EmailModel } from './login.model';
import { LoadingService } from '../provider/loading.service';
import { Router } from '@angular/router';
import {LOGIN_CONFIG} from '../config/login.config';
import { BroadcasterService} from '../provider/broadcaster.service';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';

@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = new LoginModel(1,"tester","password", "");
  submitted: boolean = false;
  emails:EmailModel[] = [] ;
  @ViewChild('email') email: ElementRef
  
  constructor(public loadingService: LoadingService,public router: Router,private broadcaster:BroadcasterService,
  private sessionStorage:SessionStorageService) {}

  ngOnInit() {
 
    this.emails.push(new EmailModel("","None"))
    this.emails.push(new EmailModel("a@a.com","a@a.com"))
    this.emails.push(new EmailModel("b@b.com","b@b.com"))
    this.emails.push(new EmailModel("c@c.com","c@c.com"))
    this.loadingService.publishLoadingCommand(false)  
    this.checkLoginStatus();
  
}
  ngAfterViewInit(){
   
  }

  createLogin(){
    this.model = new LoginModel(1,"tester","password", "test@test.com");
  }
  
  checkLoginStatus() {
      // if use already login, broadcast 
      // check storage for login status
      debugger;
      let isUserLogin = this.sessionStorage.retrieve(LOGIN_CONFIG.userKey)
      if(isUserLogin){
        this.broadcaster.broadcast(LOGIN_CONFIG.userKey, isUserLogin);
      }
         
         
  }

  login(){
    // check login credentials
    // broadcast to subscribers login status
    let loginStatus = true;
    this.broadcaster.broadcast(LOGIN_CONFIG.userKey, loginStatus);
    // persist login status in storage
    this.sessionStorage.store(LOGIN_CONFIG.userKey, loginStatus)
  }

}
