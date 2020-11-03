import { SobreComponent } from './pages/sobre/sobre.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'produto',
    component: ProdutoComponent,
  },
  {
    path: 'carrinho',
    component: CarrinhoComponent,
  },
  {
    path: 'sobre',
    component: SobreComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
