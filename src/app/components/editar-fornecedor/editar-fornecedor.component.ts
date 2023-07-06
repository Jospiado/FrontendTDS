import { Component, OnInit } from '@angular/core';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ObjectId } from 'mongodb';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Fornecedor } from 'src/app/models/fornecedor.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-fornecedor',
  templateUrl: './editar-fornecedor.component.html',
  styleUrls: ['./editar-fornecedor.component.css']
})
export class EditarFornecedorComponent implements OnInit {
  fornecedor: Fornecedor = {};
  message = '';
  debug = true;

  constructor(
    private fornecedorService: FornecedorService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getFornecedor(this.route.snapshot.params['id']);
  }

  getFornecedor(id: number): void {
    this.fornecedorService.getFornecedorById(id)
      .subscribe(
        data => {
          this.fornecedor = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateFornecedor(id: number,fornecedor: Fornecedor): void {
    this.message = '';

    this.fornecedorService.atualizarFornecedor(id,fornecedor)
      .subscribe(
        response => {
          Swal.fire('Editado', 'Fornecedor editado com sucesso!', 'success');
          if (this.debug) console.log(response);
          // this.message = response.message ? response.message : 'A entidade FornecedorEditor foi atualizada com sucesso!';
          this.router.navigate(['/fornecedores']);
        },
        error => {
          Swal.fire('Não editado', 'Não foi possivel editar o fornecedor!', 'error');
          console.log(error);
        });
  }

  deleteFornecedor(id: number): void {
    this.fornecedorService.excluirFornecedor(id)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          Swal.fire('Excluido', 'Fornecedor excluido com sucesso!', 'success');
          this.router.navigate(['/fornecedores']);
        },
        error => {
          Swal.fire('Não Excluida', 'Não foi possivel excluir o Fornecedor!', 'error');
          console.log(error);
        });
  }
}
