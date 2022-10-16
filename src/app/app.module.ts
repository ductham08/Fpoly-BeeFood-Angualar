import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/user/header/header.component';
import { FooterComponent } from './components/user/footer/footer.component';
import { BannerComponent } from './components/user/banner/banner.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { DetailPageComponent } from './page/detail-page/detail-page.component';
import { ProductPageComponent } from './page/product-page/product-page.component';
import { ContactPageComponent } from './page/contact-page/contact-page.component';
import { SwiperModule } from 'swiper/angular';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { HomePageAdminComponent } from './page/admin/home-page-admin/home-page-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    HomePageComponent,
    DetailPageComponent,
    ProductPageComponent,
    ContactPageComponent,
    LoginPageComponent,
    HomePageAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
