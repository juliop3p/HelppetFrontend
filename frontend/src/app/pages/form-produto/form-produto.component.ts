import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{Produto} from '../../model/Produto';
import{ProdutoService} from '../../services/produto.service';

@Component({
  selector: 'app-form-produto',
  templateUrl: './form-produto.component.html',
  styleUrls: ['./form-produto.component.css']
})
export class FormProdutoComponent implements OnInit {

  produto: Produto = new Produto();
  listaProduto: Produto[];

  constructor(private produtoService: ProdutoService, private router: Router) { }

  ngOnInit() {
    this.findAllProduto()
    this.findByIdProduto()
  }

  cadastrar(){
    if(this.produto.descricaoProduto == null ||
       this.produto.nomeProduto == null || 
       this.produto.precoProduto == null || 
       this.produto.marcaProduto == null ||
        this.produto.estoqueProduto == null || 
      this.produto.imagemProduto == null){
      alert('Preencha os campos corretamente antes de cadastrar!')
    }
    else{
      this.produtoService.postProduto(this.produto).subscribe((resp: Produto)=>{
        this.produto = resp
        alert('Novo produto cadastrado com sucesso!')
        this.router.navigate(['/dashboard'])
      })
    }
  }

  cancelar(){
    
   }

   findAllProduto() {
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listaProduto = resp;
    });
  }

  findByIdProduto() {
    this.produtoService.getByIdProduto(this.produto.idProduto).subscribe((resp: Produto) => {
      this.produto = resp;
    });
  }

  }

