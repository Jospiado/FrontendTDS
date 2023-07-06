import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria.model';
import { Fornecedor } from 'src/app/models/fornecedor.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-fornecedor',
  templateUrl: './add-fornecedor.component.html',
  styleUrls: ['./add-fornecedor.component.css']
})
export class AddFornecedorComponent implements OnInit {

  debug: boolean = true;
  fornecedor: Fornecedor = {};

  constructor(private fornecedorService: FornecedorService,
              private route: Router) { }

  ngOnInit(): void {

  }

//   teste(){

//     const data = {
//       fornecedor: this.fornecedor.fornecedor,
//       descricao: this.fornecedor.descricao,
//       barras: this.fornecedor.barras,
//       quantidadeEstoque: this.fornecedor.quantidadeEstoque,
//       preco: this.fornecedor.preco,
//       precominimo: this.fornecedor.precominimo,
//       referencia: this.fornecedor.referencia,
//       marca: this.fornecedor.marca,
//       fornecedor: this.fornecedor.fornecedor,
//     };
// console.log(data);

//   }
  
  saveFornecedor(): void {   
    const data = {
      nome: this.fornecedor.nome,
      cnpj: this.fornecedor.cnpj,
      endereco: this.fornecedor.endereco,
      telefone: this.fornecedor.telefone,
    };
console.log(data);
    this.fornecedorService.criarFornecedor(data)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          Swal.fire('Cadastrado', 'Fornecedor cadastrado com sucesso!', 'success');
          this.route.navigate(['/fornecedores']);
        },
        error => {
          Swal.fire('Erro', 'Fornecedor não cadastrado!', 'error');
          console.log(error);
        });
  }
}