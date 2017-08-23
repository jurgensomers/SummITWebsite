import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { CollapseModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ServiceComponent } from './components/service/service.component';
import { ProductsComponent } from './components/products/products.component'; 
import { HomeComponent } from './components/home/home.component'; 
import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService }   from './translate';
import { ArchieComponent } from './components/archie/archie.component';
import { OctaneComponent } from './components/octane/octane.component';
 


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
  },
  {
    path:'products',
    component:ProductsComponent
  },
  {
    path:'archie',
    component:ArchieComponent
  },
  {
    path:'octane',
    component:OctaneComponent
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
    TranslatePipe,
    ProductsComponent,
    ArchieComponent,
    OctaneComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    CollapseModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [TranslateService, TRANSLATION_PROVIDERS] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
  