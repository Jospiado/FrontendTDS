import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Produto } from 'src/app/models/produto.model';
import { Fornecedor } from 'src/app/models/fornecedor.model';
import { ProdutoService } from 'src/app/services/produto.service';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import {ChangeDetectionStrategy, Input} from '@angular/core';
 
@Component({
  selector: 'app-list-produto',
  templateUrl: './list-produto.component.html',
  styleUrls: ['./list-produto.component.css']
})
export class ListProdutoComponent implements OnInit {
  pageNumber=0;
  limitNumber= 10;
  estaCarregandoSpinner: boolean = true
  fornecedorSolo:Fornecedor={};
  fornecedorDesc? = '';

  fornecedorCollection?: Fornecedor[];
  selected = this.fornecedorCollection;
  ProdutoCollection?: Produto[];
  // Itens
  currentProduto: Produto = {};
  produtoTroca: any=[];


  currentIndex = -1;
  debug = true;
  descricao = '';
  base64Data: any;
  fornecedor = '';
  buttonAtivado = true;
produto: any;

  constructor(private produtoService: ProdutoService,
              private fornecedorService: FornecedorService) { }

  
  ngOnInit(): void {

    this.retrieveItensPage(this.pageNumber,10);
    this.retrieveFornecedors();
   
  }
  post:any=[];
  onScroll(){
    //Criar uma variavel pra guardar tudo
    //Toda vez que tu arrasta que vai enfiando os itens nela
    
    this.limitNumber = this.limitNumber+10;
    console.log('Down');
    this.retrieveItensPage(0,this.limitNumber);//1-1 -> 2-2 -> 1-3
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
  retrieveItens(): void {
    this.produtoService.getProdutos()
      .subscribe(
        data => {
          this.ProdutoCollection = data;
          this.estaCarregandoSpinner = false;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  retrieveItensPage(page:any,limit:any): void {
    this.produtoService.getPage(page,limit).subscribe(data=>{
      this.ProdutoCollection=data;
      this.estaCarregandoSpinner = false;
    })
  }
  refreshList(): void {
    this.retrieveItensPage(0,10);
    this.currentProduto = {};
    this.currentIndex = -1;
  }

  setActiveProduto(produto: Produto, index: number): void {
    this.currentProduto = produto;
    this.currentIndex = index;
    
  }

  searchDescricao(): void {
    this.currentProduto = {};
    this.currentIndex = -1;

    this.produtoService.findByDescricao(this.descricao)
      .subscribe(
        data => {
          this.ProdutoCollection = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  searchFornecedor(): void{
      this.currentProduto = {};
      this.currentIndex = -1;
       
      // this.produtoService.findByFornecedor(this.selected)
      //   .subscribe(
      //     data => {
      //       this.ProdutoCollection = data;
      //       if (this.debug) console.log(data);
      //     },
      //     error => {
      //       console.log(error);
      //     });
  }


  deleteProduto(produto: Produto): void {
    // this.produtoService.delete(produto.id)
    //   .subscribe(
    //     response => {
    //       if (this.debug) console.log(response);
    //       this.refreshList();
    //     },
    //     error => {
    //       console.log(error);
    //     });
  }


  OnPageChange(event: PageEvent) {
    this.estaCarregandoSpinner=true;
    console.log(event);
    setTimeout(() => {
      this.retrieveItensPage(event.pageIndex+1,event.pageSize);
    }, 500);
    
    
    }
    teste(): void{
      console.log("ola mundo");
    }

}

