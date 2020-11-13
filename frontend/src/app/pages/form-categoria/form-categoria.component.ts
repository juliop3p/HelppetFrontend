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
    const token = localStorage.getItem('token');
    const admin = localStorage.getItem('admin');

    if (token === null && admin !== 'true') {
      this.router.navigate(['/login']);
      return alert('Você precisar ser administrador para entrar nessa página!');
    }
  }

  cadastrar() {
    if (
      this.categoria.animalCategoria == null ||
      this.categoria.subSecaoCategoria == null ||
      this.categoria.secaoCategoria == null
    ) {
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
