import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  produtos: Produto[] = [];

  constructor(private router: Router) {}

  adicionar(produto: Produto) {
    this.produtos.push(produto);
    this.router.navigate(['/carrinho']);
  }

  listar() {
    return this.produtos;
  }

  limparCarrinho() {
    this.produtos = [];
    return this.produtos;
  }

  removeProduto(id: number) {
    this.produtos = this.produtos.filter((produto) => produto.idProduto !== id);
    return this.produtos;
  }
}
