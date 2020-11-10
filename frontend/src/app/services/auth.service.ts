import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { UserLogin } from './../model/UserLogin';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  cadastrar(user: User) {
    return this.http.post('http://localhost:8080/usuarios/cadastrar', user);
  }

  logar(userLogin: UserLogin) {
    return this.http.post('http://localhost:8080/usuarios/logar', userLogin);
  }

  btnSair() {
    let ok = false;
    let token = localStorage.getItem('token');

    if (token !== null) {
      ok = true;
    }

    return ok;
  }

  btnLogin() {
    let ok = false;
    let token = localStorage.getItem('token');

    if (token === null) {
      ok = true;
    }

    return ok;
  }

  btnAdmin() {
    let ok = false;
    let token = localStorage.getItem('admin');

    if (token === 'true') {
      ok = true;
    }

    return ok;
  }
}
