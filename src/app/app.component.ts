import { ChangeDetectorRef,Component,HostListener,AfterViewInit, ViewContainerRef, OnInit} from '@angular/core';
import { LoadingService } from './provider/loading.service';
import { VideoService } from './provider/video.service';
import { Modal  } from 'angular2-modal/plugins/bootstrap';
import { Router,Event } from '@angular/router';
import { Overlay,overlayConfigFactory  } from 'angular2-modal';
import { CustomModal } from './customloginmodal/customloginmodal.component';
import {SpinnerComponent} from './spinner/spinner-component';
import { BroadcasterService} from './provider/broadcaster.service';
import { LOGIN_CONFIG} from './config/login.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [LoadingService, VideoService,Modal,CustomModal]
})
export class AppComponent implements AfterViewInit, OnInit {
@HostListener('window:beforeunload', ['$event'])
public execBeforeUnload($event) {
    //$event.preventDefault(); 
    return false;
}
    
  loading: boolean = true;
  title = 'app works!';
  IsLogin= false;

  constructor( private loadingService: LoadingService, 
      private router: Router,overlay: Overlay, vcRef: ViewContainerRef,
      public modal: Modal,
      private broadcaster:BroadcasterService,
      private cdRef: ChangeDetectorRef
       ){
        overlay.defaultViewContainer = vcRef;
        loadingService.publishLoading$.subscribe((loadFlag)=> {
        this.loading = loadFlag;
      })
  }

   ngOnInit() {
      //this.showCustomModal();
      // this.router.navigateByUrl('/login');
     // window.location.hash = '';
      this.subscribeBroadcast();
  }

  ngAfterViewInit() {}

  subscribeBroadcast() {
    this.broadcaster.on<boolean>(LOGIN_CONFIG.userKey)
      .subscribe(data=> 
      {
        if(data){
          this.IsLogin = data; 
        }
      })
      // work around for error:ExpressionChangedAfterItHasBeenCheckedError
      //https://github.com/angular/angular/issues/14748
      this.cdRef.detectChanges();
  }

  showCustomModal() {
      this.modal.open(CustomModal, overlayConfigFactory({ userName: 'mave.chan@yeah.com', password: 'mypassword' }))
  }

  set _loading(value:boolean){
    this.loading = value;
  }

  get _loading() {
    return this.loading;
  }
}
