import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Observer } from 'rxjs';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    public form:any ={};
    constructor(private AuthService: AuthService,private router: Router,private main : AppComponent) {}
    ngOnInit(): void {
    //this.register();
    }
    register() {
        const observer: Observer<any> = {
            next: response => {
                if(response.token){
                    this.AuthService.cookie.storeCookie('token',response.token);
                    this.router.navigate(['/admin']);
                    this.main.showMessage('Success','Successfully Logged','');
                }
              let token=  this.AuthService.cookie.readCookie('token');
              console.log("token--",token);
              console.log("login",response);
            },
            error: error => {
              console.log('Error:', error.error);
              this.main.showMessage('Error :'+error.status,error.error.message,'',1);
            },
            complete: () => {
              console.log('Complete');
            }
          };

        this.AuthService.register(this.form).subscribe(observer);

      }
}
