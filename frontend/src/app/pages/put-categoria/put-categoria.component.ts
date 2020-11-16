import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { Produto } from 'src/app/model/Produto';
import { AlertasService } from 'src/app/service/alertas.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-put-categoria',
  templateUrl: './put-categoria.component.html',
  styleUrls: ['./put-categoria.component.css'],
})
export class PutCategoriaComponent implements OnInit {
  categoria: Categoria = new Categoria();
  idCategoria: number;

  produto: Produto = new Produto();
  listaProduto: Produto[];
  idProduto: number;

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute,
    private alerta: AlertasService
  ) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    const admin = localStorage.getItem('admin');

    if (token === null && admin !== 'true') {
      this.router.navigate(['/login']);
      this.alerta.showAlertDanger('Você precisar ser administrador para entrar nessa página!');
    }

    window.scroll(0, 0);

    this.idCategoria = this.route.snapshot.params['id'];
    this.findByIdCategoria(this.idCategoria);

    this.findAllProduto();
  }

  findByIdCategoria(id: number) {
    this.categoriaService.getByIdCategoria(id).subscribe((resp: Categoria) => {
      this.categoria = resp;
      console.log(resp);
    });
  }

  salvar() {
    this.idProduto = this.idProduto;
    this.idCategoria = this.idProduto;

    this.categoriaService.putCategoria(this.categoria).subscribe(
      (resp: Categoria) => {
        this.categoria = resp;
        this.router.navigate(['/dashboard']);
        this.alerta.showAlertSuccess('Categoria alterada com sucesso!');
      },
      (err) => {
        if (err.status == '500') {
          this.alerta.showAlertDanger('Preencha todos os campos corretamente antes de enviar!');
        }
      }
    );
  }

  findAllProduto() {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProduto = resp;
    });
  }

  findByIdProduto() {
    this.produtoService
      .getByIdProduto(this.idProduto)
      .subscribe((resp: Produto) => {
        this.produto = resp;
      });
  }
}
