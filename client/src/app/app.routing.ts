import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AuthGuard } from './auth.guard';
import { HomeComponent }   from './components/home/home.component';
import { AdminComponent }   from './components/admin/admin.component';
import { UsersComponent }   from './components/users/users.component';
import { ContactusComponent }   from './components/contactus/contactus.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  // { path: 'profile', canActivate:[AuthGuard] , component: UsersComponent },
  { path: 'profile', component: UsersComponent },
  {
  	path: 'users', 
  	// component: UsersComponent
  	pathMatch: 'prefix',
  	children:[
  		{
  			path: ':name',
  			component: UsersComponent
  		},
  		{
  			path: ':name/:id',
  			component: UsersComponent
  		}  		
  	]
  },
  { path: 'contactus', component: ContactusComponent },
  { path: 'logout', component: AdminComponent },
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports : [RouterModule]
})
export class AppRoututingModule { }
