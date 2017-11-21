import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { UsersService } from '../users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
	id = '';name = '';
  constructor( private users:UsersService, private route:ActivatedRoute) { }

  ngOnInit() {
  	this.name = this.route.snapshot.params.name;
  	this.id = this.route.snapshot.params.id;
  	console.log('USER ActivatedRoute >>>>>>>>>', this.id,this.name);
  }

}
