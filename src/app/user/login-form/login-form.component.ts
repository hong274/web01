import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

login() {
  const isAuthenticated = this.authService.login(this.username, this.password);
  if (isAuthenticated) {
    console.log('Login successful!');
    this.router.navigate(['./user/business-contacts/']);
  } else {
    console.log('Authentication failed');
    alert('Invalid username or password. Please try again.');
    // 清空用户名和密码
    this.username = '';
    this.password = '';

  }
}

}
