import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const endpoint = 'http://localhost:8000/users/';

@Injectable()
export class UsersService {

  private isUserLoggedIn = false;
  public username;
  
  private BASE_URL: string = 'http://localhost:8000/users';
  private headers: Headers = new Headers({'Content-Type': 'application/json'});

  constructor( private http:Http) {
  	this.isUserLoggedIn = false;
  }

  setUserLoggedIn(username,password){
  	this.isUserLoggedIn = true;
  	this.username = username;

  var data = this.http.get(endpoint)
        .map(response=>response.json())
        .catch(this.handleError)


    console.log('Set user as logged in :::', username,password);
    // this.getUserFromDB();
  }

  login(user): Promise<any> {
    // let url: string = `${this.BASE_URL}/login`;
    let url: string = `${this.BASE_URL}`;
    return this.http.post(url, user, {headers: this.headers}).toPromise();
  }

  getUserLoggedIn() {
  	return this.isUserLoggedIn;
  }

getUserFromDB() {
  var data = this.http.get(endpoint)
        .map(response=>response.json())
        .catch(this.handleError)
  
  console.log('Set user as logged in 1111111111111 :: ', data);
  return data;

  }

  private handleError(error:any, caught:any): any{
    console.log("users caught exceptions",error, caught);
  }

}
