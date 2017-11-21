import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsersService } from './users.service';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private user:UsersService, private router:Router ) {}
  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
  	// if(!this.user.getUserLoggedIn())
   //  	this.router.navigate(['/']);
    console.log('AuthGaurd, Is user logged in? :: ',this.user.getUserLoggedIn());
    console.log(' Your are not authenticated !');
    return this.user.getUserLoggedIn();
  }
}
