import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  token ='';
  flag_status:boolean =true;
  notification_status:any={"show":false};
  constructor(public AuthService: AuthService) {
    this.token=this.AuthService.getToken();
  }
  ngOnInit(): void {
  }
  showMessage(title:string,message:string,time:string,err:number=0){
    if(err==1){this.flag_status=false;}else{this.flag_status=true;}
    this.notification_status.show=true;
    this.notification_status.title=title;
    this.notification_status.message=message;
    this.notification_status.time=time;

     setTimeout(() => {
         this.notification_status.show = false;
       }, 3000);
 }
 logout(){
this.AuthService.cookie.delCookie('token');
    this.token='';
    location.reload();
 }
}
