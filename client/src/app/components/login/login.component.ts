import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
// import { UsersService } from '../../users.service';
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
  this.user['failed'] ='';
  this.auth.login(this.user)
    .then((user) => {
      console.log('User logged in', user.json());
    })
    .catch((err) => {
      this.user['failed'] = err.json().failed;
      console.log('onUserLogin Post call Error ::', this.user);
    });
}

RestLogin(e) {
	console.log('User Login Reset ',e);
}



}
