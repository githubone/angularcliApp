import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { VideoComponent } from './videos/video/video.component';
import { VideoService } from './provider/video.service';
import { LoadingService } from './provider/loading.service';
import { Routing } from './app.routes';
import { VideolistComponent } from './videos/videolist/videolist.component';
import { VideodetailComponent } from './videos/videodetail/videodetail.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CustommodalwizardComponent } from './custommodalwizard/custommodalwizard.component';
import { CustomModal } from './custommodal/custommodal.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    VideoComponent,
    VideolistComponent,
    VideodetailComponent,
    WelcomeComponent,
    CustommodalwizardComponent,
    CustomModal,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    ModalModule.forRoot(),
    BootstrapModalModule
  ],

  entryComponents: [CustomModal],
  providers: [VideoService, LoadingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
