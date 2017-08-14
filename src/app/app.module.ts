import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ServiceComponent } from './components/service/service.component';
import { TranslateDirective } from './directives/translate.directive';
import { HomeComponent } from './components/home/home.component'; 
import { TranslationService, Globals } from './services/translation.service'; 




const appRoutes: Routes = [
  {
    path:'',
    component : HomeComponent
  },
  {
    path:'home',
    component : HomeComponent
  },
  {
    path: 'contact',
    component : ContactComponent
  },
  {
    path: 'jobs',
    component : JobsComponent
  },
  {
    path: 'service',
    component: ServiceComponent
  },
  {
    path: 'customer',
    component:CustomerComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    JobsComponent,
    CustomerComponent,
    ServiceComponent,
    TranslateDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TranslationService, Globals] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
