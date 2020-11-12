import { CarrinhoService } from './../../services/carrinho.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
})
export class ProdutoComponent implements OnInit {
  produto: Produto = new Produto();
  idProduto: number;

  findByIdProduto() {
    this.produtoService
      .getByIdProduto(this.idProduto)
      .subscribe((resp: Produto) => {
        this.produto = resp;
      });
  }

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private carrinhoService: CarrinhoService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);

    this.idProduto = this.route.snapshot.params['id'];

    this.findByIdProduto();
  }

  adicionarCarrinho(produto: Produto) {
    this.carrinhoService.adicionar(produto);
  }
}
