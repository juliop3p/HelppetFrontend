import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  listaProduto: Produto[];

  findAllProduto() {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProduto = resp;
      // console.log(resp);
    });
  }

  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {
    window.scroll(0, 0);
    this.findAllProduto();
  }

  scrollTop() {
    window.scroll(0, 0);
  }
}
