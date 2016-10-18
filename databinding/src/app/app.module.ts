import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {DatabindingRoutingModule} from './app-routing.module';
import { PropertyComponent } from './property/property.component';
import { EventComponent } from './event/event.component';
import { TwoWayComponent } from './two-way/two-way.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    InterpolationComponent,
    PropertyComponent,
    EventComponent,
    TwoWayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DatabindingRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
