import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  cadastrar(user: User) {
    return this.http.post('http://localhost:8080/usuarios/cadastrar', user);
  }

  
}
