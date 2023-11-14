import { Injectable, EventEmitter } from "@angular/core";
// import {Http, Response,Headers} from '@angular/http';
import { Location } from '@angular/common';

import { HttpClient, HttpHeaders } from "@angular/common/http";

import { BehaviorSubject } from "rxjs";


@Injectable({
  providedIn: 'root',
})
export class AppService {
    public apiUrl: any;

    constructor(private http: HttpClient,private location:Location) {
this.apiUrl = this.getApiUrl('api');
this.apiUrl =  window.location.href.replace('/assets/angular','');

this.apiUrl=this.apiUrl+"api";
console.log("apiURL",this.apiUrl);
      }

      getApiUrl(endpoint: string): string {
        const domainUrl = this.location.prepareExternalUrl('');
        const apiUrl = `${domainUrl}/api/${endpoint}`;
        return apiUrl;
      }
      addDefaultParam(method: string = "post", data: any = {}) {
        data = {
            ...data,
            user_token: 'test',
          };
          // data['website_id'] = data['website_id']||this.website_id;
          // data['user_token'] = this.user_token;
          if (method == "post") {
            return data;
          } else {
            return typeof data == "string"
              ? data
              : Object.keys(data)
                  .map(function (k) {
                    return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
                  })
                  .join("&");
          }

      }


}
