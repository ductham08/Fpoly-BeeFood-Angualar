import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './page/contact-page/contact-page.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { ProductPageComponent } from './page/product-page/product-page.component';

const routes: Routes = [
  {path:"", component: HomePageComponent},
  {path:"product", component: ProductPageComponent},
  {path:"contact", component: ContactPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
