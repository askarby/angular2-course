import {WelcomeComponent} from './welcome/welcome.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InterpolationComponent} from './interpolation/interpolation.component';
import {TwoWayComponent} from './two-way/two-way.component';
import {EventComponent} from './event/event.component';
import {PropertyComponent} from './property/property.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'interpolation', component: InterpolationComponent },
  { path: 'property', component: PropertyComponent },
  { path: 'event', component: EventComponent },
  { path: 'two-way', component: TwoWayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class DatabindingRoutingModule { }
