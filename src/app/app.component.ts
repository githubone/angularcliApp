import { Component, AfterViewInit, ViewContainerRef, OnInit} from '@angular/core';
import { LoadingService } from './provider/loading.service';
import { VideoService } from './provider/video.service';
import { Modal  } from 'angular2-modal/plugins/bootstrap';
import { Router } from '@angular/router';
import { Overlay,overlayConfigFactory  } from 'angular2-modal';
import { CustomModal } from './custommodal/custommodal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [LoadingService, VideoService,Modal,CustomModal]
})
export class AppComponent implements AfterViewInit, OnInit {
  loading: boolean = true;
  title = 'app works!';

  constructor( private loadingService: LoadingService, 
      private router: Router,overlay: Overlay, vcRef: ViewContainerRef,
      public modal: Modal ){
        overlay.defaultViewContainer = vcRef;
        loadingService.publishLoading$.subscribe((loadFlag)=> {
        this.loading = loadFlag;
      })
  }

   ngOnInit() {
      this.showCustomModal();
  }

  ngAfterViewInit() {}

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
