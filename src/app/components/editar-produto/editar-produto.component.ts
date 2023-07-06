import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/produto.model';
import { ObjectId } from 'mongodb';
import { Fornecedor } from 'src/app/models/fornecedor.model';
import { Categoria } from 'src/app/models/categoria.model';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {
  produto: Produto = {};
  message = '';
  debug = true;

  selectedFornecedor = this.fornecedorCollection;
  selectedCategoria= this.categoriaCollection;

  fornecedorCollection? : Fornecedor[];
  categoriaCollection?: Categoria[];

  constructor(
    private produtoService: ProdutoService,
    private fornecedorService: FornecedorService,
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getProduto(this.route.snapshot.params['id']);
    this.retrieveCategoria();
    this.retrieveFornecedors();
  }

  getProduto(id: number): void {
    this.produtoService.getProdutoById(id)
      .subscribe(
        data => {
          this.produto = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }

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
  updateProduto(id: number,produto: Produto): void {
    this.message = '';

    this.produtoService.atualizarProduto(id,produto)
      .subscribe(
        response => {
          Swal.fire('Editado', 'Produto editado com sucesso!', 'success');
          if (this.debug) console.log(response);
          // this.message = response.message ? response.message : 'A entidade ProdutoEditor foi atualizada com sucesso!';
          this.router.navigate(['/produtos']);
        },
        error => {
          Swal.fire('Não editado', 'Não foi possivel editar o produto!', 'error');
          console.log(error);
        });
  }

  deleteProduto(id: number): void {
    this.produtoService.excluirProduto(id)
      .subscribe(
        response => {
          if (this.debug) console.log(response);
          Swal.fire('Excluido', 'Produto excluido com sucesso!', 'success');
          this.router.navigate(['/produtos']);
        },
        error => {
          Swal.fire('Não Excluida', 'Não foi possivel excluir o Produto!', 'error');
          console.log(error);
        });
  }
}
