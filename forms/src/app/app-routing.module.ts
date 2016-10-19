import {WelcomeComponent} from './welcome/welcome.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ReactiveComponent} from './reactive/reactive.component';
import {TemplateComponent} from './template/template.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'template', component: TemplateComponent },
  { path: 'reactive', component: ReactiveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class FormsRoutingModule { }
