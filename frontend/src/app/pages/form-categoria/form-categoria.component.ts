import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from '../../model/Categoria';

@Component({
  selector: 'app-form-categoria',
  templateUrl: './form-categoria.component.html',
  styleUrls: ['./form-categoria.component.css'],
})
export class FormCategoriaComponent implements OnInit {
  categoria: Categoria = new Categoria();
  listaCategoria: Categoria[];
  modificacao: boolean = false;

  constructor(
    private categoriaService: CategoriaService,
    private router: Router
  ) {}

  ngOnInit() {
    this.findAllCategoria();
  }

  findAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategoria = resp;
      console.log(this.listaCategoria);
    });
  }

  findByIdCategoria() {
    this.categoriaService
      .getByIdCategoria(this.categoria.idCategoria)
      .subscribe((resp: Categoria) => {
        this.categoria = resp;
      });
  }

  cadastrar() {
    if (this.categoria.animalCategoria == null) {
      alert('Preencha o campo da categoria corretamente');
    } else {
      this.categoriaService
        .postCategoria(this.categoria)
        .subscribe((resp: Categoria) => {
          this.categoria = resp;
          this.router.navigate(['/dashboard']);
          alert('Categoria cadastrada com sucesso!');
        });
    }
  }
}
