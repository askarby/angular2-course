import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {WelcomeComponent} from './welcome/welcome.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { ProjectionComponent } from './projection/projection.component';
import {ComponentEncapasulationRoutingModule} from './app-routing.module';
import {SingleSlotComponent} from './projection/single-slot.component';
import {MultiSlotComponent} from './projection/multi-slot.component';
import {UserFormComponent} from './input-output/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    InputOutputComponent,
    UserFormComponent,
    ProjectionComponent,
    SingleSlotComponent,
    MultiSlotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentEncapasulationRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
