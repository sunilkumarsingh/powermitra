import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent }   from './home/home.component';
import { AdminComponent }   from './admin/admin.component';
import { UsersComponent }   from './users/users.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'profile', component: UsersComponent },
  { path: 'contactus', component: HomeComponent },
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports : [RouterModule]
})
export class AppRoututingModule { }
