import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  constructor(private http: HttpClient) {}

  token = {
    headers: new HttpHeaders().set(
      'Authorization',
      localStorage.getItem('token')
    ),
  };

  getAllCategoria() {
    return this.http.get('https://backend-helppet.herokuapp.com/categorias');
  }

  getByIdCategoria(id: number) {
    return this.http.get(
      `https://backend-helppet.herokuapp.com/categorias/${id}`
    );
  }

  getBySecao(secao: string) {
    return this.http.get(
      `https://backend-helppet.herokuapp.com/categorias/secaocategoria/${secao}`
    );
  }

  getBySubSecao(secao: string) {
    return this.http.get(
      `https://backend-helppet.herokuapp.com/categorias/subsecaocategoria/${secao}`
    );
  }

  postCategoria(categoria: Categoria) {
    return this.http.post(
      'https://backend-helppet.herokuapp.com/categorias',
      categoria,
      this.token
    );
  }

  putCategoria(categoria: Categoria) {
    return this.http.put(
      `https://backend-helppet.herokuapp.com/categorias/${categoria.idCategoria}`,
      categoria,
      this.token
    );
  }

  deleteCategoria(id: number) {
    return this.http.delete(
      `https://backend-helppet.herokuapp.com/categorias/${id}`,
      this.token
    );
  }
}
