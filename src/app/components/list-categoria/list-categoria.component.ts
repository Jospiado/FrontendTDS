import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import {ChangeDetectionStrategy, Input} from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';
 
@Component({
  selector: 'app-list-categoria',
  templateUrl: './list-categoria.component.html',
  styleUrls: ['./list-categoria.component.css']
})
export class ListCategoriaComponent implements OnInit {
  pageNumber=0;
  limitNumber= 10;
  estaCarregandoSpinner: boolean = true
  categoriaDesc? = '';

  categoriaCollection?: Categoria[];
  selected = this.categoriaCollection;
  CategoriaCollection?: Categoria[];
  // Itens
  currentCategoria: Categoria = {};
  categoriaTroca: any=[];


  currentIndex = -1;
  debug = true;
  descricao = '';
  base64Data: any;
  categoria = '';
  buttonAtivado = true;


  constructor(private categoriaService: CategoriaService) { }

  
  ngOnInit(): void {

    this.retrieveItensPage(this.pageNumber,10);
    this.retrieveCategorias();
   
  }
  post:any=[];
  onScroll(){
    //Criar uma variavel pra guardar tudo
    //Toda vez que tu arrasta que vai enfiando os itens nela
    
    this.limitNumber = this.limitNumber+10;
    console.log('Down');
    this.retrieveItensPage(0,this.limitNumber);//1-1 -> 2-2 -> 1-3
  }
  retrieveCategorias(): void{
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
  
  retrieveItensPage(page:any,limit:any): void {
    this.categoriaService.getPage(page,limit).subscribe(data=>{
      this.CategoriaCollection=data;
      this.estaCarregandoSpinner = false;
    })
  }
  refreshList(): void {
    this.retrieveItensPage(0,10);
    this.currentCategoria = {};
    this.currentIndex = -1;
  }

  setActiveCategoria(categoria: Categoria, index: number): void {
    this.currentCategoria = categoria;
    this.currentIndex = index;
    
  }

  searchDescricao(): void {
    this.currentCategoria = {};
    this.currentIndex = -1;

    this.categoriaService.findByDescricao(this.descricao)
      .subscribe(
        data => {
          this.CategoriaCollection = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  searchCategoria(): void{
      this.currentCategoria = {};
      this.currentIndex = -1;
       
      // this.categoriaService.findByCategoria(this.selected)
      //   .subscribe(
      //     data => {
      //       this.CategoriaCollection = data;
      //       if (this.debug) console.log(data);
      //     },
      //     error => {
      //       console.log(error);
      //     });
  }


  deleteCategoria(categoria: Categoria): void {
    // this.categoriaService.delete(categoria.id)
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

