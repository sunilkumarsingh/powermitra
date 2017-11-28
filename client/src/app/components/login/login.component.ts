import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	user: User = new User();
	constructor( private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

onUserLogin(): void {
  this.auth.login(this.user)
    .then((user) => {
      if (user.json().status === 'success') {
        localStorage.setItem('user', user.json().id);
        // localStorage.removeItem('user');
        this.auth.isLoggedIn = true;
        this.auth.currentuser = user.json();
        console.log('onUserLogin Post call Error ::', this.auth.currentuser);
        this.router.navigate(['/profile']);
      }      
    })
    .catch((err) => {
      this.user['status'] = 'failed';
      this.user['message'] = err.json().failed;
      console.log('onUserLogin Post call Error ::', this.user);
    });
}

RestLogin(e) {
	console.log('User Login Reset ',e);
}

}
