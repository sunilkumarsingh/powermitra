import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { HttpClient } from '@angular/common/http';
import { CommonService } from '../services/common.service';

@Injectable()
export class AuthService {

  private headers: Headers = new Headers({'Content-Type': 'application/json'});
  
  constructor(private http: Http, private common: CommonService) {}
  
  login(user): Promise<any> {
  	var csrftoken = this.common.getCookies();
  	console.log('CommonService :: ',csrftoken);
    // let url: string = '/users/list/';
    let url: string = '/login/';

  	this.headers.set("X-CSRFToken" , csrftoken);

    return this.http.post(url, user, {headers: this.headers}).toPromise();
  }
}
