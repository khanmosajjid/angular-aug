import {NotFoundComponent} from './components/not-found/not-found.component';
import {SignupPageComponent} from './components/signup-page/signup-page.component';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {Routes} from '@angular/router';
import {VideosComponent} from './components/videos/videos.component';
import {EmailsComponent} from './components/emails/emails.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AuthGuard} from './guards/auth.guard';

export const myMaping: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginPageComponent},
  {path: 'signup', component: SignupPageComponent},
  {path: '', component: DashboardComponent, children: [
    {path: 'videos', component: VideosComponent, canActivate: [AuthGuard]},
    {path: 'emails', component: EmailsComponent, canActivate: [AuthGuard]},
  ]
  },
  {path: '**', component: NotFoundComponent}
];
