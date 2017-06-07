import { Routes, RouterModule} from '@angular/router';
import { VideoComponent } from './videos/video/video.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { VideolistComponent } from './videos/videolist/videolist.component';
import { VideodetailComponent } from './videos/videodetail/videodetail.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {path:'welcome', component: WelcomeComponent},
    {path:'video', component: VideoComponent},
    {path:'videoslist/:g', component: VideolistComponent},
    {path:'videodetail/:id', component: VideodetailComponent},
    {path: 'login', component: LoginComponent}
];

export const Routing = RouterModule.forRoot(routes);