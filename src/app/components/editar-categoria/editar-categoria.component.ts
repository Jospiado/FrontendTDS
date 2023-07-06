import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ObjectId } from 'mongodb';
import { Categoria } from 'src/app/models/categoria.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent implements OnInit {
  categoria: Categoria = {};
  message = '';
  debug = true;

  constructor(
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getCategoria(this.route.snapshot.params['id']);
  }

  getCategoria(id: number): void {
    this.categoriaService.getCategoriaById(id)
      .subscribe(
        data => {
          this.categoria = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateCategoria(id: number,categoria: Categoria): void {
    this.message = '';

    this.categoriaService.atualizarCategoria(id,categoria)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          Swal.fire('Editado', 'Categoria editada com sucesso!', 'success');
          // this.message = response.message ? response.message : 'A entidade CategoriaEditor foi atualizada com sucesso!';
          this.router.navigate(['/categorias']);
        },
        error => {
          Swal.fire('Não editada', 'Não foi possivel editar a categoria!', 'error');
          console.log(error);
        });
  }

  deleteCategoria(id: number): void {
    this.categoriaService.excluirCategoria(id)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          Swal.fire('Excluido', 'Categoria excluida com sucesso!', 'success');
          this.router.navigate(['/categorias']);
        },
        error => {
          Swal.fire('Não Excluida', 'Não foi possivel excluir a categoria!', 'error');
          console.log(error);
        });
  }
}
