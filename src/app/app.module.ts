import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MAT_DATE_LOCALE } from '@angular/material/core'; 

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { AddProdutoComponent } from './components/add-produto/add-produto.component';
import { DetalhesProdutoComponent } from './components/detalhes-produto/detalhes-produto.component';
import { ListProdutoComponent } from './components/list-produto/list-produto.component';
import { AddFornecedorComponent } from './components/add-fornecedor/add-fornecedor.component';
import { DetalhesFornecedorComponent } from './components/detalhes-fornecedor/detalhes-fornecedor.component';
import { ListFornecedorComponent } from './components/list-fornecedor/list-fornecedor.component';
import { AddCategoriaComponent } from './components/add-categoria/add-categoria.component';
import { DetalhesCategoriaComponent } from './components/detalhes-categoria/detalhes-categoria.component';
import { ListCategoriaComponent } from './components/list-categoria/list-categoria.component';
import { EditarProdutoComponent } from './components/editar-produto/editar-produto.component';
import { EditarFornecedorComponent } from './components/editar-fornecedor/editar-fornecedor.component';
import { EditarCategoriaComponent } from './components/editar-categoria/editar-categoria.component';
import { WhatsappComponent } from './components/whatsapp/whatsapp.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guard/auth.guard';


@NgModule({ 
  declarations: [ 
    AppComponent, 
AddProdutoComponent,
DetalhesProdutoComponent,
ListProdutoComponent,
AddFornecedorComponent,
DetalhesFornecedorComponent,
ListFornecedorComponent,
AddCategoriaComponent,
DetalhesCategoriaComponent,
ListCategoriaComponent,
AddProdutoComponent,
ListProdutoComponent,
DetalhesProdutoComponent,
EditarProdutoComponent,
EditarFornecedorComponent,
EditarCategoriaComponent,
WhatsappComponent,
LoginComponent,

  ],
  imports: [ 
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule, 
    MatSnackBarModule, 
    MatTabsModule, 
    BrowserAnimationsModule, 
    MatInputModule, 
    MatDialogModule, 
    MatFormFieldModule, 
    MatSelectModule, 
    MatNativeDateModule, 
    MatMenuModule, 
    MatDatepickerModule, 
    FormsModule, 
    LayoutModule, 
    MatToolbarModule, 
    MatButtonModule, 
    MatCardModule, 
    MatSidenavModule, 
    MatTableModule, 
    MatIconModule, 
    MatDividerModule, 
    MatListModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    InfiniteScrollModule,

  ], 
  providers: [ 
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }, 
    HttpClient ,
    AuthService, AuthGuard
  ], 
  bootstrap: [AppComponent] 
}) 
export class AppModule { } 
