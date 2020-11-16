import { Router } from '@angular/router';
import { Categoria } from './../../model/Categoria';
import { CategoriaService } from './../../services/categoria.service';
import { CarrinhoService } from './../../services/carrinho.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/services/produto.service';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  faBars = faBars;
  listaProduto: Produto[];

  listaCategoria: string[];

  findAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategoria = [
        ...new Set(resp.map((item) => item.secaoCategoria)),
      ];
    });
  }

  findAllProduto() {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProduto = resp;
      this.listaProduto.forEach((produto) => (produto.quantidade = 1));
    });
  }

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private carrinhoService: CarrinhoService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);
    this.findAllProduto();
    this.findAllCategoria();
  }

  adicionarCarrinho(produto: Produto) {
    this.carrinhoService.adicionar(produto);
  }

  scrollTop() {
    window.scroll(0, 0);
  }

  findAllByCategoria(secao: string) {
    this.categoriaService.getBySecao(secao).subscribe((resp: Categoria[]) => {
      let produtos = [];
      resp
        .map((categoria) => categoria.produto)
        .map((produtosArray) =>
          produtosArray.map((produto) => produtos.push(produto))
        );
      this.listaProduto = produtos;
      this.listaProduto.forEach((produto) => (produto.quantidade = 1));
      window.scroll(0, 900);
    });
  }
}
