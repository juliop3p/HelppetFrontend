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
    return this.http.get('https://backend-helppet.herokuapp.com/produtos');
  }

  getByIdProduto(id: number) {
    return this.http.get(
      `https://backend-helppet.herokuapp.com/produtos/${id}`
    );
  }

  getByNomeProduto(nome: string) {
    return this.http.get(
      `https://backend-helppet.herokuapp.com/produtos/produto/${nome}`
    );
  }

  postProduto(produto: Produto) {
    return this.http.post(
      'https://backend-helppet.herokuapp.com/produtos',
      produto,
      this.token
    );
  }

  putProduto(produto: Produto) {
    return this.http.put(
      `https://backend-helppet.herokuapp.com/produto/${produto.idProduto}`,
      produto
    );
  }

  deleteProduto(id: number) {
    return this.http.delete(
      `https://backend-helppet.herokuapp.com/produtos/${id}`,
      this.token
    );
  }
}
