import { Router } from '@angular/router';
import { CarrinhoService } from './../../services/carrinho.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/Produto';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements OnInit {
  listaProdutos: Produto[];
  subTotal: number = 0;
  frete: number = 20;
  total: number = 0;

  constructor(
    private carrinhoService: CarrinhoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');

    if (token === null) {
      this.router.navigate(['/login']);
      return alert('Você precisar estar logado para entrar nessa página!');
    }

    window.scroll(0, 0);
    this.listaProdutos = this.carrinhoService.listar();
    this.updateValor();
  }

  carrinhoVazio() {
    if (this.listaProdutos.length > 0) {
      return false;
    }
    return true;
  }

  updateValor() {
    this.subTotal = 0;
    this.listaProdutos.map(
      (produto) => (this.subTotal += produto.precoProduto * produto.quantidade)
    );
    this.total = this.subTotal + this.frete;
  }

  addQuantidade(id: number) {
    this.listaProdutos.forEach((produto) => {
      if (produto.idProduto === id) {
        if (produto.quantidade + 1 <= produto.estoqueProduto)
          produto.quantidade++;
      }
    });
    this.updateValor();
  }

  removeQuantidade(id: number) {
    this.listaProdutos.forEach((produto) => {
      if (produto.idProduto === id) {
        if (produto.quantidade > 1) {
          produto.quantidade--;
        } else {
          this.removeProduto(id);
        }
      }
    });
    this.updateValor();
  }

  limparCarrinho() {
    this.listaProdutos = this.carrinhoService.limparCarrinho();
    this.updateValor();
  }

  removeProduto(id: number) {
    this.listaProdutos = this.carrinhoService.removeProduto(id);
    this.updateValor();
  }
}
