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
	console.log('onUserLogin Call 11111111111111111',this.user);
    this.auth.login(this.user)
    .then((user) => {
      console.log('User logged in  22222222222 ', user.json());
    })
    .catch((err) => {
      console.log('onUserLogin Call 333333333333333', err);
    });
}

// LoginUser(e){
// 	e.preventDefault();
// 	console.log('User Login Event >>>>>>>>>>>>>>>>>>>>>>',e);
// 	var username = e.target[0].value;
// 	var password = e.target[1].value;
// 	console.log('User Login ',username,password);

// 	if(username !== "" && password !== ""){
// 		this.users.login(username);
// 		this.router.navigate(['profile']);
// 	}
// 	return false;
// }

RestLogin(e) {
	console.log('User Login Reset >>>>>>>>>>>> ',e);
}



}
