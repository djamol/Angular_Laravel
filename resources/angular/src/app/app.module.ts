import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { AdminComponent } from './component/admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './service/movie.service';
import { CategoryService } from './service/category.service';
import { CookieService } from './service/cookie.service';
import { AppService } from './app.service';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AdminComponent,
    LoginComponent,
    RegisterComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AppService, MovieService,CategoryService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
