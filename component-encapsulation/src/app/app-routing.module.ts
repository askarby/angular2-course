import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {InputOutputComponent} from './input-output/input-output.component';
import {ProjectionComponent} from './projection/projection.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'input-output', component: InputOutputComponent },
  { path: 'projection', component: ProjectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class ComponentEncapasulationRoutingModule { }
