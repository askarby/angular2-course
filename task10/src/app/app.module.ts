import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { ArticleTableComponent } from './article-table/article-table.component';
import { RecieptComponent } from './reciept/reciept.component';
import { Article } from './shared/article.model';
import { ArticleService } from './shared/article.service';
import { CustomerService } from './shared/customer.service';
import { RecieptService } from './reciept/reciept.service';
import { DawaService } from './shared/dawa.service';
import { PricingDirective } from './shared/pricing.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomerFormComponent,
    ArticleTableComponent,
    RecieptComponent,
    PricingDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    {
      provide: ArticleService,
      useFactory: () => {
        const service = new ArticleService();
        if (service.getAll().length === 0) {
          [
            new Article('Støvkost', 200),
            new Article('Affaldssække, 3 stk', 20),
            new Article('Rengøringsmiddel', 39.95)
          ].forEach(service.add.bind(service));
        }
        return service;
      }
    },
    RecieptService,
    CustomerService,
    DawaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
