import { Component, OnInit,ViewContainerRef  } from '@angular/core';
import { LoadingService } from '../provider/loading.service';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  viewProviders: [Modal]
})
export class WelcomeComponent implements OnInit {
   slides = [
    {caption: "The Piper at the Gates of Dawn"},
    {caption: "A Saucerful of Secrets"},
    {caption: "Music from the Film More"},
    {caption: "Ummagumma"},
    {caption: "Atom Heart Mother"},
    {caption: "Meddle"}
  ];
  constructor(private loadingService:LoadingService,overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) { 
    overlay.defaultViewContainer = vcRef;
  }

  ngOnInit() {
       //this.showModal();
       this.loadingService.publishLoadingCommand(true);

       setTimeout(()=> {
          //alert('times up')
          this.loadingService.publishLoadingCommand(false);
       }, 1000)
  }

  showModal(){
    this.modal.alert()
        .size('lg')
        .showClose(true)
        .title('A simple Alert style modal window')
        .body(`
            <h4>Alert is a classic (title/body/footer) 1 button modal window that 
            does not block.</h4>
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

   addSlide() {
    this.slides.push({caption: "new one"})
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  }


