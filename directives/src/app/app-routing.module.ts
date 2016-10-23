import {WelcomeComponent} from './welcome/welcome.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AttributeComponent} from './attribute/attribute.component';
import {StructuralComponent} from './structural/structural.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'attribute', component: AttributeComponent },
  { path: 'structural', component: StructuralComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class DirectivesRoutingModule { }
