import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
