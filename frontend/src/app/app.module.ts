import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPayPalModule } from 'ngx-paypal';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { CarrinhoItemComponent } from './components/carrinho-item/carrinho-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormCategoriaComponent } from './pages/form-categoria/form-categoria.component';
import { FormProdutoComponent } from './pages/form-produto/form-produto.component';
import { PutCategoriaComponent } from './pages/put-categoria/put-categoria.component';
import { PutProdutoComponent } from './pages/put-produto/put-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CarrinhoComponent,
    SobreComponent,
    ProdutoComponent,
    CardItemComponent,
    CarrinhoItemComponent,
    CadastroComponent,
    LoginComponent,
    DashboardComponent,
    FormCategoriaComponent,
    FormProdutoComponent,
    PutCategoriaComponent,
    PutProdutoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    NgxPayPalModule,
  ],
  providers: [NgxNavigationWithDataComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
