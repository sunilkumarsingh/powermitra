import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	user = []
  constructor( private router: Router) { }

  ngOnInit() {
  }


LoginUser(e){
	e.preventDefault();
	console.log('User Login Event >>>>>>>>>>>>>>>>>>>>>>',e);
	var username = e.target[0].value;
	var password = e.target[1].value;
	console.log('User Login ',username,password);
	if(username == "sunil" && password== "123"){
		this.router.navigate(['dashboard']);
	}
	return false;
}

RestLogin(e) {
	console.log('User Login Reset >>>>>>>>>>>> ',e);
}

}
