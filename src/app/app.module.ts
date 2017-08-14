import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ServiceComponent } from './components/service/service.component'; 
import { HomeComponent } from './components/home/home.component'; 
import { TranslationService } from './services/translation.service';
import { TranslatePipe } from './pipes/translate.pipe'; 
import { TRANSLATION_PROVIDERS }   from './translations';





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
    HomeComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TranslationService, TRANSLATION_PROVIDERS] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
  