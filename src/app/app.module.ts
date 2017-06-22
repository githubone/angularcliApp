import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import{ Location,LocationStrategy,HashLocationStrategy} from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { AlertModule } from 'ng2-bootstrap';
//import { LocalStorageModule } from 'angular-2-local-storage';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { VideoComponent } from './videos/video/video.component';
import { VideoService } from './provider/video.service';
import { NodetsapiclientService } from './provider/nodetsapiclient.service';
import { AssetService } from './provider/asset.service';
import { LoadingService } from './provider/loading.service';
import { DataService } from './provider/data.service';
import { BroadcasterService } from './provider/broadcaster.service';
import {SpinnerService} from './spinner/spinner-service';
import { Routing } from './app.routes';
import { VideolistComponent } from './videos/videolist/videolist.component';
import { VideodetailComponent } from './videos/videodetail/videodetail.component';
import { WelcomeComponent } from './welcome/welcome.component';
// import { CustommodalwizardComponent } from './custommodalwizard/custommodalwizard.component';
import { CustomModal } from './customloginmodal/customloginmodal.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { TestComponent } from './test/test.component';
import {SpinnerComponent} from './spinner/spinner-component';
import {Ng2Webstorage} from 'ngx-webstorage';
import {WindowRef} from './provider/windowref';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    FooterComponent,
    VideoComponent,
    VideolistComponent,
    VideodetailComponent,
    WelcomeComponent,
    //CustommodalwizardComponent,
    CustomModal,
    LoginComponent,
    LayoutComponent,
    TestComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    ModalModule.forRoot(),
    BootstrapModalModule,
    AlertModule.forRoot(),
    // LocalStorageModule.withConfig({
    //         prefix: 'my-app',
    //         storageType: 'localStorage'
    //     })
       Ng2Webstorage
  ],

  entryComponents: [CustomModal],
  providers: [
    VideoService,DataService, LoadingService,AssetService,SpinnerService, WindowRef,NodetsapiclientService,
    BroadcasterService
    ],
  //Location, {provide: LocationStrategy, useClass: HashLocationStrategy}
  bootstrap: [AppComponent]
})
export class AppModule { }
