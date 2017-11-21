import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// third party imports
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppComponent } from './app.component';
import { AppRoututingModule } from './app.routing';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    UsersComponent,
    AdminComponent,
    LoginComponent
  ],
  imports: [
    // ngx-bootstrap
    // BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
      
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoututingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
