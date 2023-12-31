import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { AppComponent } from '../../../app/app.component';
import { Observer } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    public form:any ={};
    constructor(private AuthService: AuthService,private router: Router,private main:AppComponent) {}
    ngOnInit(): void {
    //this.register();
    }
    login() {

        const observer: Observer<any> = {
            next: response => {
              if(response.token){
                this.AuthService.cookie.storeCookie('token',response.token);
               if(response.admin==1){this.AuthService.adminStatus=true;}
                this.router.navigate(['/admin']);
              }else{
                this.main.showMessage('Error :'+response.status,"Error Auth",'',1);
              }
            },
            error: error => {
              console.log('Error:', error.error);
              this.main.showMessage('Error :'+error.status,error.error.error,'',1);
            },
            complete: () => {
              console.log('Complete');
            }
          };

          this.AuthService.login(this.form).subscribe(observer);


      }
}
