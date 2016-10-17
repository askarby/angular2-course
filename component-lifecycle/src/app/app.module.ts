import {ComponentLifecycleRoutingModule} from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoggerComponent } from './logger/logger.component';
import { OnChangesComponent } from './on-changes/on-changes.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { OnInitDestroyComponent } from './on-init-destroy/on-init-destroy.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListLoggerComponent } from './list-logger/list-logger.component';
import { ObjectLoggerComponent } from './object-logger/object-logger.component';
import { DoCheckComponent } from './do-check/do-check.component';

@NgModule({
  declarations: [
    AppComponent,
    LoggerComponent,
    OnChangesComponent,
    WelcomeComponent,
    OnInitDestroyComponent,
    ListItemComponent,
    ListLoggerComponent,
    ObjectLoggerComponent,
    DoCheckComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentLifecycleRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
