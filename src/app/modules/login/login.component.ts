import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private fb: FormBuilder, 
    private loginService: LoginService,
    private router: Router
    ) {}

  formLogin: FormGroup = this.fb.group({
    email: [''],
    password: ['']
  });
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

  login() {
    this.loginService.login(this.formLogin.value.email, this.formLogin.value.password).subscribe({
      next: (res) => {
        if(res) {
          this.router.navigate(['/private'])
        }
      }
    })
  }
}
