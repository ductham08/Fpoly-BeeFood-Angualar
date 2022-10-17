import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesAdminPageComponent } from './page/admin/categories-admin-page/categories-admin-page.component';
import { DashbroadAdminPageComponent } from './page/admin/dashbroad-admin-page/dashbroad-admin-page.component';
import { HomeAdminPageComponent } from './page/admin/home-admin-page/home-admin-page.component';
import { ProductAddPageComponent } from './page/admin/product-add-page/product-add-page.component';
import { ProductsAdminPageComponent } from './page/admin/products-admin-page/products-admin-page.component';
import { UserAdminPageComponent } from './page/admin/user-admin-page/user-admin-page.component';
import { ContactPageComponent } from './page/contact-page/contact-page.component';
import { DetailPageComponent } from './page/detail-page/detail-page.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { HomeUserPageComponent } from './page/home-user-page/home-user-page.component';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { ProductPageComponent } from './page/product-page/product-page.component';

const routes: Routes = [
  {path:"", component: HomeUserPageComponent, children: [
    {path:"", component: HomePageComponent},
    {path:"product", component: ProductPageComponent},
    {path:"product/:id", component: DetailPageComponent},
    {path:"contact", component: ContactPageComponent},
    {path:"login", component: LoginPageComponent},
  ]},
  {path:"admin", component: HomeAdminPageComponent, children: [
    {path:"", component: DashbroadAdminPageComponent},
    {path:"products", component: ProductsAdminPageComponent},
    {path:"products/add", component: ProductAddPageComponent},
    {path:"categories", component: CategoriesAdminPageComponent},
    {path:"user", component: UserAdminPageComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
