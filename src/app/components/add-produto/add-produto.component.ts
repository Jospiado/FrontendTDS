import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/produto.model';
import { Fornecedor } from 'src/app/models/fornecedor.model';
import { ProdutoService } from 'src/app/services/produto.service';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.component.html',
  styleUrls: ['./add-produto.component.css']
})
export class AddProdutoComponent implements OnInit {

  debug: boolean = true;
  selectedFornecedor = this.fornecedorCollection;
  selectedCategoria= this.categoriaCollection;
  produto: Produto = {};
    
  fornecedorCollection? : Fornecedor[];
  categoriaCollection?: Categoria[];

  constructor(private produtoService: ProdutoService,
              private route: Router,private fornecedorService: FornecedorService,private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.retrieveFornecedors();
    this.retrieveCategoria();
  }

//   teste(){

//     const data = {
//       produto: this.produto.produto,
//       descricao: this.produto.descricao,
//       barras: this.produto.barras,
//       quantidadeEstoque: this.produto.quantidadeEstoque,
//       preco: this.produto.preco,
//       precominimo: this.produto.precominimo,
//       referencia: this.produto.referencia,
//       marca: this.produto.marca,
//       fornecedor: this.produto.fornecedor,
//     };
// console.log(data);

//   }
  retrieveFornecedors(): void{
    this.fornecedorService.getFornecedores()
      .subscribe(
        data => {
          this.fornecedorCollection = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  retrieveCategoria(): void{
    this.categoriaService.getCategorias()
      .subscribe(
        data => {
          this.categoriaCollection = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  saveProduto(): void {   
    const data = {
      nome: this.produto.nome,
      descricao: this.produto.descricao,
      preco: this.produto.preco,
      estoque: this.produto.estoque,
      categoria: this.selectedCategoria,
      fornecedor: this.selectedFornecedor,
    };
console.log(data);
    this.produtoService.criarProduto(data)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          Swal.fire('Cadastrado', 'Produto cadastrado com sucesso!', 'success');

          this.route.navigate(['/produtos']);
        },
        error => {
          Swal.fire('Erro', 'Produto não cadastrado!', 'error');

          console.log(error);
        });
  }
}