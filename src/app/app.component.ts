import { Component, OnInit } from '@angular/core';
import { User } from './modules/login/model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'projeto-personagens';

  dataUser: User[] = [
    {
      email: 'vando_gouveia@hotmail.com',
      password: '123456'
    }
  ]

  ngOnInit(): void {
      localStorage.setItem('dataUser', JSON.stringify(this.dataUser));
  }

  
}
