import {WelcomeComponent} from './welcome/welcome.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SimpleInjectionComponent} from './simple-injection/simple-injection.component';
import {TypeReplacementComponent} from './type-replacement/type-replacement.component';
import {ExistingTypeReplacementComponent} from './existing-type-replacement/existing-type-replacement.component';
import {ValueInjectionComponent} from './value-injection/value-injection.component';
import {FactoryComponent} from './factory/factory.component';
import {TokenComponent} from './token/token.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'simple', component: SimpleInjectionComponent },
  { path: 'type', component: TypeReplacementComponent },
  { path: 'existing', component: ExistingTypeReplacementComponent },
  { path: 'value', component: ValueInjectionComponent },
  { path: 'factory', component: FactoryComponent },
  { path: 'token', component: TokenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class DependencyInjectionRoutingModule { }
