// import { Component, OnInit, ViewContainerRef } from '@angular/core';
// import { LoadingService } from '../../provider/loading.service';
// import { Overlay,overlayConfigFactory  } from 'angular2-modal';
// import { Modal  } from 'angular2-modal/plugins/bootstrap';
// import { BSModalContext } from 'angular2-modal/plugins/bootstrap/index';
// import { CustommodalwizardComponent } from '../../custommodalwizard/custommodalwizard.component';
// import { CustomModal } from '../../custommodal/custommodal.component';

// @Component({
//   selector: 'app-videolist',
//   templateUrl: './videolist.component.html',
//   styleUrls: ['./videolist.component.css'],
//   viewProviders: [Modal,CustommodalwizardComponent,CustomModal]
// })
// export class VideolistComponent implements OnInit {

//   constructor(private loadingService:LoadingService,overlay: Overlay, vcRef: ViewContainerRef, 
//   public modal: Modal, 
//   public customModal: CustommodalwizardComponent
  
//   ) { 
//     overlay.defaultViewContainer = vcRef;
//   }

//   ngOnInit() {
//       //this.showModal();
//      //this.showCustomModal();
//       this.showCustomModal2();
//        this.loadingService.publishLoadingCommand(false);

     
//   }
 

//   showCustomModal2() {
//       this.modal.open(CustomModal, overlayConfigFactory({ num1: 2, num2: 3 }))
//   }

//   showCustomModal(){
//     this.customModal.createModal();
//   }

//   showModal(){
//     this.modal.alert()
//         .size('lg')
//         //.showClose(true)
//         .title('Login')
//         .bodyClass('')
//         .body(`
//             <h4>Textbox does not work ??</h4>
//             <input class="form-control" type="text" #answer autofocus>
//             <b>Configuration:</b>
//             <ul>
//                 <li>Non blocking (click anywhere outside to dismiss)</li>
//                 <li>Size large</li>
//                 <li>Dismissed with default keyboard key (ESC)</li>
//                 <li>Close wth button click</li>
//                 <li>HTML content</li>
//             </ul>`)
//         .open();
//   }

// }
