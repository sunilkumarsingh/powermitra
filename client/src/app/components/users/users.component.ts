import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { UsersService } from '../../users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  constructor( private users:UsersService, private route:ActivatedRoute) { }

  ngOnInit() {
  }

}
