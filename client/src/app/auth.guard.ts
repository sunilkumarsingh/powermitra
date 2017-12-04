import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private auth:AuthService, private router:Router ) {}

	canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {

    if (this.auth.isAuthenticated()) {
		console.log('Your are authenticated !');
    	this.router.navigate(['/profile']);
		return true;
    }else{
		console.log('Your are not authenticated !');
		this.router.navigate(['/admin']);
		return true;
    }
  }
}
