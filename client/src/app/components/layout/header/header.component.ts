import { Component, OnInit } from '@angular/core';
import  { UsersService } from '../../../users.service';

@Component({
  selector: 'pm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username = 'anonymous';

  constructor( private user:UsersService) { }

  ngOnInit() {
	  this.username = this.user.username;
  	console.log("Header, Is user logged in? ::", this.user);
  }
  today: number = Date.now();
}
