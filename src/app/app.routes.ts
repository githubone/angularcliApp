import { Routes, RouterModule} from '@angular/router';
import { VideoComponent } from './videos/video/video.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { VideolistComponent } from './videos/videolist/videolist.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {path:'welcome', component: WelcomeComponent},
    {path:'videos', component: VideoComponent},
    {path:'videoslist', component: VideolistComponent},
    {path: 'login', component: LoginComponent}
];


export const Routing = RouterModule.forRoot(routes);