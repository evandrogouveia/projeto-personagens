import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(email: string, password: string): Observable<Boolean> {
    const userStorage: any = localStorage.getItem('dataUser');
    const user: User[] = JSON.parse(userStorage);

    const hasUser = user.find(u => u.email === email && u.password === password);

    if (hasUser != undefined) {
      localStorage.setItem('hasAuthenticated', JSON.stringify(true));
      return of(true);
    } else {
      alert('Erro ou fazer login');
      return of(false);
    }
  }


  hasAuthenticated() {
    const authenticated: any = localStorage.getItem('hasAuthenticated');
    return JSON.parse(authenticated);
  }
}
