import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';

@NgModule({
  declarations: [
    App,
    NavigationComponent,
    HomeComponent,
    NavigationComponent,
    ProductComponent,
    ContactComponent,
    PipeExampleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
