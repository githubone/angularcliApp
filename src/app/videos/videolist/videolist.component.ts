import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { LoadingService } from '../../provider/loading.service';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css'],
  viewProviders: [Modal]
})
export class VideolistComponent implements OnInit {

  constructor(private loadingService:LoadingService,overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) { 
    overlay.defaultViewContainer = vcRef;
  }

  ngOnInit() {
      this.showModal();
       this.loadingService.publishLoadingCommand(false);

     
  }

  showModal(){
    this.modal.alert()
        .size('lg')
        //.showClose(true)
        .title('Login')
        .body(`
            <h4>Textbox does not work ??</h4>
            <input type=''text''  />
            <b>Configuration:</b>
            <ul>
                <li>Non blocking (click anywhere outside to dismiss)</li>
                <li>Size large</li>
                <li>Dismissed with default keyboard key (ESC)</li>
                <li>Close wth button click</li>
                <li>HTML content</li>
            </ul>`)
        .open();
  }

}
