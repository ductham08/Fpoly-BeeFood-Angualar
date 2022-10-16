import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageAdminComponent } from './page/admin/home-page-admin/home-page-admin.component';
import { ContactPageComponent } from './page/contact-page/contact-page.component';
import { DetailPageComponent } from './page/detail-page/detail-page.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { ProductPageComponent } from './page/product-page/product-page.component';

const routes: Routes = [
  {path:"", component: HomePageComponent},
  {path:"product", component: ProductPageComponent},
  {path:"product/:id", component: DetailPageComponent},
  {path:"contact", component: ContactPageComponent},
  {path:"login", component: LoginPageComponent},
  {path:"admin", component: HomePageAdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
