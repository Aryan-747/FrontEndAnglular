import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { ServiceComponent } from './service/service.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductComponent,
    ServiceComponent,
    NavigationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  exports: [],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
