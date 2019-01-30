import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getItems() {
    const requestOptions = {
      headers: new HttpHeaders({
        'x-api-key': 'zQo4PPqD862IwDIQRZub8gX4dqjA3aW2DDhI6UF4',
      }),
    };

    return this.http.get('https://27gmrimn45.execute-api.eu-west-2.amazonaws.com/demos/leighton-demo-api?TableName=products', requestOptions)
  }
}
