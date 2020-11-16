import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from './../../services/categoria.service';
import { ProdutoService } from './../../services/produto.service';
import { Categoria } from './../../model/Categoria';
import { Produto } from './../../model/Produto';
import { AlertasService } from 'src/app/service/alertas.service';

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

  showProdutos: boolean = true;

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
    private produtoService: ProdutoService,
    private router: Router,
    private alerta: AlertasService
  ) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    const admin = localStorage.getItem('admin');

    if (token === null && admin !== 'true') {
      this.router.navigate(['/login']);
      this.alerta.showAlertDanger('Você precisar ser administrador para entrar nessa página!');
    }

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

  changeTab() {
    this.showProdutos = !this.showProdutos;
  }
}
