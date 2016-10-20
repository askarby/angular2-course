import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {FormsRoutingModule} from './app-routing.module';
import {TemplateComponent} from './template/template.component';
import {ReactiveComponent} from './reactive/reactive.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {CustomValidationComponent} from './custom-validation/custom-validation.component';
import {NameCasingDirective} from './custom-validation/name-casing.directive';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TemplateComponent,
    ReactiveComponent,
    CustomValidationComponent,
    NameCasingDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FormsRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
