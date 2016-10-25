import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {UnknownRouteComponent} from './unknown-route/unknown-route.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: '**', component: UnknownRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
