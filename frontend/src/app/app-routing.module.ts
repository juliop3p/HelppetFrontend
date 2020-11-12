import { PutProdutoComponent } from './pages/put-produto/put-produto.component';
import { FormProdutoComponent } from './pages/form-produto/form-produto.component';
import { FormCategoriaComponent } from './pages/form-categoria/form-categoria.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { HomeComponent } from './pages/home/home.component';
import { PutCategoriaComponent } from './pages/put-categoria/put-categoria.component';

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
    path: 'produto/:id',
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
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'form-categoria',
    component: FormCategoriaComponent,
  },
  {
    path: 'form-produto',
    component: FormProdutoComponent,
  },
  {
    path: 'put-produto/:id',
    component: PutProdutoComponent,
  },
  {
    path: 'put-categoria/:id',
    component: PutCategoriaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
