import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, tap, map } from 'rxjs/operators';
import { Router } from '@angular/router'

import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  public _headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('user-key', `${environment.SECRET_KEY}`)

  constructor(
    private _http: HttpClient,
    private router: Router,
  ) { }


  getCategories():Observable<any> {
    return this._http.get(`${environment.ENDPOINT}/categories` , { headers: this._headers })
  }

  getLocation(location): Observable<any> {
    return this._http.get(`${environment.ENDPOINT}/locations?query=${location}`, { headers: this._headers });
  }






}
