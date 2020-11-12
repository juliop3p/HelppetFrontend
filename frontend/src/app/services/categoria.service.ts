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
    return this.http.get('http://localhost:8080/categorias');
  }

  getByIdCategoria(id: number) {
    return this.http.get(`http://localhost:8080/categorias/${id}`);
  }

  getBySecao(secao: string) {
    return this.http.get(
      `http://localhost:8080/categorias/secaocategoria/${secao}`
    );
  }

  getBySubSecao(secao: string) {
    return this.http.get(
      `http://localhost:8080/categorias/subsecaocategoria/${secao}`
    );
  }

  postCategoria(categoria: Categoria) {
    return this.http.post('http://localhost:8080/categorias', categoria, this.token);
  }
 
  putCategoria(categoria: Categoria){
    return this.http.put(`http://localhost:8080/categorias/${categoria.idCategoria}`,categoria,this.token);
  }

<<<<<<< HEAD
=======
  deleteCategoria(id: number){
    return this.http.delete(
      `http://localhost:8080/categorias/${id}`, this.token
    )
  }
>>>>>>> c460b09257544cdd2bafdfe5f7cb3ef1471d9591
}
