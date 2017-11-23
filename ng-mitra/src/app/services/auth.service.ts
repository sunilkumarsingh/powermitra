import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  private headers: Headers = new Headers({'Content-Type': 'application/json'});
  
  constructor(private http: Http) {}
  
  login(user): Promise<any> {
    let url: string = `/users`;
    return this.http.post(url, user, {headers: this.headers}).toPromise();
  }
}
