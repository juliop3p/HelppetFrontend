import { Component, OnInit } from '@angular/core';
import { CategoriaService } from './../../services/categoria.service';
import { ProdutoService } from './../../services/produto.service';
import { Categoria } from './../../model/Categoria';
import { Produto } from './../../model/Produto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  id: number;
  listaCategoria: Categoria[];
  listaProduto: Produto[];
  produto: Produto = new Produto();
  categoria: Categoria = new Categoria();

  findAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategoria = resp;
    });
  }

  findAllProduto() {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProduto = resp;
    });
  }

  constructor(
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService
  ) {}

  ngOnInit() {
    this.findAllCategoria();
    this.findAllProduto();
  }

  armazenarId(id: number) {
    this.id = id;
  }

  btnSimProduto() {
    this.produtoService.deleteProduto(this.id).subscribe(() => {
      this.findAllProduto();
    });
  }

  btnSimCategoria() {
    this.categoriaService.deleteCategoria(this.id).subscribe(() => {
      this.findAllCategoria();
    });
  }
}
