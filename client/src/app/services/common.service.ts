import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

  constructor() { }

  getCookies() {
  	var csrftoken = '6tWHslc8BwjUHWDLZ3JdiVP5Rfz9zNKWKv8zNplya3hjQjB1FzMmXhirEPMCtCRk';
  	return csrftoken;
  }

}
