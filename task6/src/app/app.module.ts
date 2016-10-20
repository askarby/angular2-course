import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { ArticleTableComponent } from './article-table/article-table.component';
import { RecieptComponent } from './reciept/reciept.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerFormComponent,
    ArticleTableComponent,
    RecieptComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
