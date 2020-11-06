import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
