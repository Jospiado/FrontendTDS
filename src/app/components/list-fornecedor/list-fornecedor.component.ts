import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import {ChangeDetectionStrategy, Input} from '@angular/core';
import { Fornecedor } from 'src/app/models/fornecedor.model';
import { FornecedorService } from 'src/app/services/fornecedor.service';
 
@Component({
  selector: 'app-list-fornecedor',
  templateUrl: './list-fornecedor.component.html',
  styleUrls: ['./list-fornecedor.component.css']
})
export class ListFornecedorComponent implements OnInit {
  pageNumber=0;
  limitNumber= 10;
  estaCarregandoSpinner: boolean = true
  fornecedorSolo:Fornecedor={};
  fornecedorDesc? = '';

  fornecedorCollection?: Fornecedor[];
  selected = this.fornecedorCollection;
  FornecedorCollection?: Fornecedor[];
  // Itens
  currentFornecedor: Fornecedor = {};
  fornecedorTroca: any=[];


  currentIndex = -1;
  debug = true;
  descricao = '';
  base64Data: any;
  fornecedor = '';
  buttonAtivado = true;


  constructor(private fornecedorService: FornecedorService) { }

  
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
  
  retrieveItensPage(page:any,limit:any): void {
    this.fornecedorService.getPage(page,limit).subscribe(data=>{
      this.FornecedorCollection=data;
      this.estaCarregandoSpinner = false;
    })
  }
  refreshList(): void {
    this.retrieveItensPage(0,10);
    this.currentFornecedor = {};
    this.currentIndex = -1;
  }

  setActiveFornecedor(fornecedor: Fornecedor, index: number): void {
    this.currentFornecedor = fornecedor;
    this.currentIndex = index;
    
  }

  searchDescricao(): void {
    this.currentFornecedor = {};
    this.currentIndex = -1;

    this.fornecedorService.findByDescricao(this.descricao)
      .subscribe(
        data => {
          this.FornecedorCollection = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  searchFornecedor(): void{
      this.currentFornecedor = {};
      this.currentIndex = -1;
       
      // this.fornecedorService.findByFornecedor(this.selected)
      //   .subscribe(
      //     data => {
      //       this.FornecedorCollection = data;
      //       if (this.debug) console.log(data);
      //     },
      //     error => {
      //       console.log(error);
      //     });
  }


  deleteFornecedor(fornecedor: Fornecedor): void {
    // this.fornecedorService.delete(fornecedor.id)
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

