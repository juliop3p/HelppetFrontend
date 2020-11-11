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
    private categoriaService: CategoriaService
  ) {}
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
}
