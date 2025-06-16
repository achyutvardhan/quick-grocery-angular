import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    email = 'example@g.com';
     password  = '123456';
  login() {
       if(this.email == 'example@g.com' && this.password == '123456') {
           alert('Login successful');
       }
       else {
           alert('Invalid email or password');
       }
  }
}
