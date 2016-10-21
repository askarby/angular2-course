import {WelcomeComponent} from './welcome/welcome.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ServicesComponent} from './services/services.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'services', component: ServicesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class ServicesRoutingModule { }
