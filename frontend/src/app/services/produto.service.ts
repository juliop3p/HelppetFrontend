import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  constructor(private http: HttpClient) {}

  token = {
    headers: new HttpHeaders().set(
      'Authorization',
      localStorage.getItem('token')
    ),
  };

  getAllProduto() {
    return this.http.get('http://localhost:8080/produtos');
  }

  getByIdProduto(id: number) {
    return this.http.get(`http://localhost:8080/produtos/${id}`);
  }

  getByNomeProduto(nome: string) {
    return this.http.get(`http://localhost:8080/produtos/produtos/${nome}`);
  }

  postProduto(produto: Produto) {
    return this.http.post('http://localhost:8080/produtos', produto,this.token);
  }
<<<<<<< HEAD
 
  putProduto(produto: Produto){
    return this.http.put(`http://localhost:8080/produto/${produto.idProduto}`,produto);
  }

=======

  deleteProduto(id: number){
    return this.http.delete(
      `http://localhost:8080/produtos/${id}`, this.token
    )

  }
>>>>>>> c460b09257544cdd2bafdfe5f7cb3ef1471d9591
}
