import { Component, OnInit } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap/index';
import { Router } from '@angular/router';


export class CustomModalContext extends BSModalContext {
  public userName:string;
  public password:string;
  
}

@Component({
 selector: 'modal-content',
   styleUrls: ['./custommodal.component.css'],
  //TODO: [ngClass] here on purpose, no real use, just to show how to workaround ng2 issue #4330.
  // Remove when solved.
  /* tslint:disable */ 
  templateUrl: './custommodal.component.tpl.html'
})

export class CustomModal implements CloseGuard, ModalComponent<CustomModalContext> {
  context: CustomModalContext;

  public shouldUseMyClass: boolean;
  public loginSuccess: boolean;

  constructor(public dialog: DialogRef<CustomModalContext>,
  public router: Router) {
    this.context = dialog.context;
    this.loginSuccess = true;
    dialog.setCloseGuard(this);
  }

  login(){
      console.log(this.context);
      this.dialog.close();
     // this.router.navigateByUrl('/videoslist');
      ///this.router.navigateByUrl('/videoslist');
      this.router.navigateByUrl('/welcome');
  }

  onKeyUp(value) {
   //this.wrongAnswer = value != 5;
   // if login is incorrect, set loginSuccess to false
    this.dialog.close();
  }

  beforeDismiss(): boolean {
    return true;
  }

  beforeClose(): boolean {
    //return this.wrongAnswer;
    return !this.loginSuccess;
  }
}
