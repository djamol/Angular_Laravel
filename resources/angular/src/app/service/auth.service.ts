import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { catchError } from 'rxjs/operators';

import { CookieService } from './cookie.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

    public apiUrl: any;
public adminStatus =false;

  constructor(private http: HttpClient,private location:Location,public cookie :CookieService) {
    this.apiUrl = this.getApiUrl('api');
this.apiUrl =  window.location.href.replace('/assets/angular','');
this.apiUrl=this.apiUrl+"api";
console.log("apiURL",this.apiUrl);
//this.apiUrl="https://amol.com/api"
//console.log("apiURL",this.apiUrl);

  }
  getApiUrl(endpoint: string): string {
    const domainUrl = this.location.prepareExternalUrl('');
    const apiUrl = `${domainUrl}/api/${endpoint}`;
    return apiUrl;
  }
  // HTTP headers, if needed
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  getToken(){
    return this.cookie.readCookie('token');
  }

  isAdmin(): Observable<any> {
   let httpOptions = {};
      let auth = 'Bearer ' + this.getToken();
      console.log("auth test->",auth.replaceAll('"',''));
      this.httpOptions ={
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': auth.replaceAll('"','')
          })
        };
      return this.http.get<any>(this.apiUrl+ "/admin", this.httpOptions);
  }
  login(auth: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+ "/login", auth, this.httpOptions);
  }
  register(auth: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+ "/register", auth, this.httpOptions).pipe(
        catchError((error) => {
            throw error;
        })
      );
  }


}
