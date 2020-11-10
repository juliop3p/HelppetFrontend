import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {
  faUser,
  faCartPlus,
  faBars,
  faUserCog,
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

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}
