import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddCategoriaComponent } from './components/add-categoria/add-categoria.component';
import { AddFornecedorComponent } from './components/add-fornecedor/add-fornecedor.component';
import { AddProdutoComponent } from './components/add-produto/add-produto.component';
import { DetalhesCategoriaComponent } from './components/detalhes-categoria/detalhes-categoria.component';
import { DetalhesFornecedorComponent } from './components/detalhes-fornecedor/detalhes-fornecedor.component';
import { DetalhesProdutoComponent } from './components/detalhes-produto/detalhes-produto.component';
import { EditarCategoriaComponent } from './components/editar-categoria/editar-categoria.component';
import { EditarFornecedorComponent } from './components/editar-fornecedor/editar-fornecedor.component';
import { EditarProdutoComponent } from './components/editar-produto/editar-produto.component';
import { ListCategoriaComponent } from './components/list-categoria/list-categoria.component';
import { ListFornecedorComponent } from './components/list-fornecedor/list-fornecedor.component';
import { ListProdutoComponent } from './components/list-produto/list-produto.component';

import { WhatsappComponent } from './components/whatsapp/whatsapp.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '',canActivate:[AuthGuard], component: AppComponent }, 

  // { path: 'itens', component: ListItemComponent },
  // { path: 'itens/:id', component: DetailsItemComponent }, 
  // { path: 'add/item', component: AddItemComponent }, 
  //Login
  { path: 'login', component: LoginComponent }, 
  //Produtos
  { path: 'produtos',canActivate:[AuthGuard], component: ListProdutoComponent }, 
  { path: 'produtos/:id', canActivate:[AuthGuard],component: EditarProdutoComponent }, 
  { path: 'add/produto',canActivate:[AuthGuard], component: AddProdutoComponent }, 
  { path: 'detalhesproduto/:id',canActivate:[AuthGuard], component: DetalhesProdutoComponent }, 
  //Fornecedores
  { path: 'fornecedores',canActivate:[AuthGuard], component: ListFornecedorComponent }, 
  { path: 'add/fornecedor',canActivate:[AuthGuard], component: AddFornecedorComponent }, 
  { path: 'detalhesfornecedor/:id',canActivate:[AuthGuard], component: DetalhesFornecedorComponent }, 
  { path: 'fornecedores/:id',canActivate:[AuthGuard], component: EditarFornecedorComponent },


  //Categorias
  { path: 'categorias',canActivate:[AuthGuard], component: ListCategoriaComponent }, 
  { path: 'add/categoria',canActivate:[AuthGuard], component: AddCategoriaComponent }, 
  { path: 'detalhescategoria/:id',canActivate:[AuthGuard], component: DetalhesCategoriaComponent }, 
  { path: 'categorias/:id',canActivate:[AuthGuard], component: EditarCategoriaComponent },


  // { path: 'buscas/:id' , component : BuscasComponent},
  { path: 'whatsapp/:id' ,canActivate:[AuthGuard], component : WhatsappComponent},
  // { path: 'detalhesitem/:id' , component : DetalhesItemComponent},
  // { path: 'buscaIndividualizada/:id', component: BuscaIndividualizadaComponent}
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
