import {OnInitDestroyComponent} from './on-init-destroy/on-init-destroy.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {OnChangesComponent} from './on-changes/on-changes.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DoCheckComponent} from './do-check/do-check.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'onChanges', component: OnChangesComponent },
  { path: 'onInitDestroy', component: OnInitDestroyComponent },
  { path: 'doCheck', component: DoCheckComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class ComponentLifecycleRoutingModule { }
