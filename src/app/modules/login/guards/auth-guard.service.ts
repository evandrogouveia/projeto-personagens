import { Injectable } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    private loginService: LoginService,
    private router: Router
    ) { }

  canActivate() {
    if (this.loginService.hasAuthenticated()) {
      return true
    }

    this.router.navigate(['/login']);
    return false;
  }

}
