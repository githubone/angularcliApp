import { Component, OnInit,AfterViewInit, ViewChild,ElementRef } from '@angular/core';
import { LoginModel, EmailModel } from './login.model';
import { LoadingService } from '../provider/loading.service';
import { Router } from '@angular/router';

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
  
  constructor(public loadingService: LoadingService,public router: Router) {
    
   }

  ngOnInit() {
 
    this.emails.push(new EmailModel("","None"))
    this.emails.push(new EmailModel("a@a.com","a@a.com"))
    this.emails.push(new EmailModel("b@b.com","b@b.com"))
    this.emails.push(new EmailModel("c@c.com","c@c.com"))
    this.loadingService.publishLoadingCommand(false)  
}
  ngAfterViewInit(){
      // error - nativeElement undefined
      //console.log(this.email.nativeElement.value);
  }


  onSubmit(){
    this.submitted = true;
  }

  createLogin(){
    this.model = new LoginModel(1,"tester","password", "test@test.com");
  }

  login(){
    this.router.navigateByUrl('/videoslist');
  }

}
