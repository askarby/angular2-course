import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SimpleInjectionComponent } from './simple-injection/simple-injection.component';
import { DependencyInjectionRoutingModule } from "./app-routing.module";
import { TypeReplacementComponent } from './type-replacement/type-replacement.component';
import { ExistingTypeReplacementComponent } from './existing-type-replacement/existing-type-replacement.component';
import { LeftComponent } from './existing-type-replacement/left.component';
import { RightComponent } from './existing-type-replacement/right.component';
import { ValueInjectionComponent } from './value-injection/value-injection.component';
import { FactoryComponent } from './factory/factory.component';
import { TokenComponent } from './token/token.component';
import { CounterService } from "./shared/counter.service";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SimpleInjectionComponent,
    TypeReplacementComponent,
    ExistingTypeReplacementComponent,
    LeftComponent,
    RightComponent,
    ValueInjectionComponent,
    FactoryComponent,
    TokenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DependencyInjectionRoutingModule
  ],
  providers: [
    CounterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
