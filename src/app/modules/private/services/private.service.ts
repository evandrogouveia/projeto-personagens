import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrivateService {

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any> {
    return this.http.get(`${environment.API_URL}/api/character`)
  }

  getCharacterDetail(id: string): Observable<any> {
    return this.http.get(`${environment.API_URL}/api/character/${id}`)
  }

}
