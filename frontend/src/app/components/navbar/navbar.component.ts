import { ProdutoService } from 'src/app/services/produto.service';
import { Produto } from 'src/app/model/Produto';
import { CategoriaService } from './../../services/categoria.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from './../../model/Categoria';
import {
  faUser,
  faCartPlus,
  faBars,
  faUserCog,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  faUser = faUser;
  faCartPlus = faCartPlus;
  faBars = faBars;
  faUserCog = faUserCog;
  faSignOutAlt = faSignOutAlt;

  constructor(
    public authService: AuthService,
    private router: Router,
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService
  ) {}

  produto: string;
  listaProduto: Produto[];
  listaCategoria: string[];
  user: string;

  findAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategoria = [
        ...new Set(resp.map((item) => item.secaoCategoria)),
      ];
    });
  }

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    this.findAllCategoria();
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/home']);
  }

  findProdutoByNome() {
    this.produtoService
      .getByNomeProduto(this.produto)
      .subscribe((resp: Produto[]) => {
        this.listaProduto = resp;
        this.router.navigate(['/home', { state: this.listaProduto }]);
      });
  }
}
