import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as CryptoJS from 'crypto-js';
@Injectable()
export class CookieService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  public getCookie(name: string): string {
    const cookies = this.document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
    return '';
  }

  public storeCookie(key:string,value:string){
    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(value), 'secretKey').toString();
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (60 * 60 * 1000)); // 1 hour from now
    const cookieOptions = {
    expires: expirationDate.toUTCString(),
    path: '/'
    };
    document.cookie = `${key}=${encryptedData}; ${Object.entries(cookieOptions).map(([k, v]) => `${k}=${v}`).join('; ')}`;
  }
  public readCookie(key:string){
   let value= this.getCookie(key);
    return   CryptoJS.AES.decrypt(value, 'secretKey').toString(CryptoJS.enc.Utf8);
  }
  public delCookie(key:string){
    document.cookie = `${key}=; expires=Mon, 01 Jan 2000 00:00:00 UTC; path=/`;
  }
}
