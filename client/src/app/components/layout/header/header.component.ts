import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'pm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username = 'anonymous';

  constructor( private auth:AuthService) { }

  ngOnInit() {
  	console.log("Header, Is user logged in? ::", this.auth);
  }
  
  today: number = Date.now();

onLogout() {
  this.auth.logout();
}

}
