  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { HomeComponent } from './home/home.component';
  import { NavigationComponent } from './navigation/navigation.component';
  import { ContactComponent } from './contact/contact.component';
  import { ProductComponent } from './product/product.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';

  const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'contact',component:ContactComponent},
    {path:'product',component:ProductComponent},
    {path:'pipe',component:PipeExampleComponent}
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
