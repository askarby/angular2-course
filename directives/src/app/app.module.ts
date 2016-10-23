import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DirectivesRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StructuralComponent } from './structural/structural.component';
import { AttributeComponent } from './attribute/attribute.component';
import { HoverBlinkDirective } from './attribute/hover-blink.directive';
import { UnlessDirective } from './structural/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    StructuralComponent,
    AttributeComponent,
    HoverBlinkDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DirectivesRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
