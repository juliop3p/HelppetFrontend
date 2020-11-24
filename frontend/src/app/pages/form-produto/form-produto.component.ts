import { Categoria } from './../../model/Categoria';
import { CategoriaService } from './../../services/categoria.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../../model/Produto';
import { ProdutoService } from '../../services/produto.service';
import { AlertasService } from 'src/app/service/alertas.service';

@Component({
  selector: 'app-form-produto',
  templateUrl: './form-produto.component.html',
  styleUrls: ['./form-produto.component.css'],
})
export class FormProdutoComponent implements OnInit {
  idSecao: number;
  secao: string;
  subSecao: string;

  categoria: Categoria = new Categoria();
  listaSecao: string[];
  listaSubSecao: string[];
  listaSecaoAnimal: Categoria[];

  produto: Produto = new Produto();

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private router: Router,
    private alerta: AlertasService
  ) {}

  findAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaSecao = [...new Set(resp.map((item) => item.secaoCategoria))];
    });
  }

  findAllByCategoria() {
    this.categoriaService
      .getBySecao(this.secao)
      .subscribe((resp: Categoria[]) => {
        this.listaSubSecao = [
          ...new Set(resp.map((item) => item.subSecaoCategoria)),
        ];
      });
  }

  findAllBySubCategoria() {
    this.categoriaService
      .getBySubSecao(this.subSecao)
      .subscribe((resp: Categoria[]) => {
        this.listaSecaoAnimal = resp;
      });
  }

  ngOnInit() {
    window.scroll(0, 0);
    const token = localStorage.getItem('token');
    const admin = localStorage.getItem('admin');

    if (token === null && admin !== 'true') {
      this.router.navigate(['/login']);
      this.alerta.showAlertDanger('Você precisar ser administrador para entrar nessa página!');
    }

    this.findAllCategoria();
  }

  cadastrar() {
    this.categoria.idCategoria = this.idSecao;
    this.produto.categoria = this.categoria;

    if (
      this.produto.descricaoProduto == null ||
      this.produto.nomeProduto == null ||
      this.produto.precoProduto == null ||
      this.produto.marcaProduto == null ||
      this.produto.estoqueProduto == null ||
      this.produto.imagemProduto == null
    ) {
      this.alerta.showAlertDanger('Preencha os campos corretamente antes de cadastrar!');
    } else {
      this.produtoService
        .postProduto(this.produto)
        .subscribe((resp: Produto) => {
          this.produto = resp;
          this.alerta.showAlertSuccess('Novo produto cadastrado com sucesso!');
          this.router.navigate(['/dashboard']);
        });
    }
  }
}
