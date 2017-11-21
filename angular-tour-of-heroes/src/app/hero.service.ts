import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


const endpoint = 'http://localhost:8000/users/'

@Injectable()
export class HeroService {

constructor(private http: Http) { }

getHeroesList(): Observable<Hero[]> {
	this.getUserFromDB();
  return of(HEROES);
}

// get the user from db get method.

getUserFromDB(){
      return this.http.get(endpoint)
              .map(response=>response.json())
              .catch(this.handleError)
  }

  private handleError(error:any, caught:any): any{
      console.log(">>>>>>>>",error, caught)
  }

}
