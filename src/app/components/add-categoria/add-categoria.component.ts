import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-categoria',
  templateUrl: './add-categoria.component.html',
  styleUrls: ['./add-categoria.component.css']
})
export class AddCategoriaComponent implements OnInit {

  debug: boolean = true;
  categoria: Categoria = {};

  constructor(private categoriaService: CategoriaService,
              private route: Router) { }

  ngOnInit(): void {

  }

//   teste(){

//     const data = {
//       categoria: this.categoria.categoria,
//       descricao: this.categoria.descricao,
//       barras: this.categoria.barras,
//       quantidadeEstoque: this.categoria.quantidadeEstoque,
//       preco: this.categoria.preco,
//       precominimo: this.categoria.precominimo,
//       referencia: this.categoria.referencia,
//       marca: this.categoria.marca,
//       categoria: this.categoria.categoria,
//     };
// console.log(data);

//   }
  
  saveCategoria(): void {   
    const data = {
      nome: this.categoria.nome,
    };
console.log(data);
    this.categoriaService.criarCategoria(data)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          Swal.fire('Cadastrado', 'Categoria cadastrada com sucesso!', 'success');

          this.route.navigate(['/categorias']);
        },
        error => {
          Swal.fire('Erro', 'Categoria não cadastrada!', 'error');
          console.log(error);
        });
  }
}