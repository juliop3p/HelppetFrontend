import { Categoria } from './Categoria';

export class Produto {
  idProduto: number;
  nomeProduto: string;
  precoProduto: number = 0;
  marcaProduto: string;
  imagemProduto: string;
  estoqueProduto: number;
  descricaoProduto: string;
  categoria: Categoria;
  quantidade: number;
}
