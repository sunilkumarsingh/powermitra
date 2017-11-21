import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './hero.service';
import { AppRoututingModule } from './app-roututing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoututingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
