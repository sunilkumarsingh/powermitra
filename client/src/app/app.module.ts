import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

// third party imports
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppComponent } from './app.component';
import { AppRoututingModule } from './app.routing';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NavigationComponent } from './components/layout/navigation/navigation.component';
import { UsersComponent } from './components/users/users.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';

import  { CommonService } from './services/common.service';
import { AuthService } from './services/auth.service';
import { ContactusComponent } from './components/contactus/contactus.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    UsersComponent,
    AdminComponent,
    LoginComponent,
    ContactusComponent,
    PageNotFoundComponent
  ],
  imports: [
    // ngx-bootstrap
    // BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
      
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoututingModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    CommonService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
