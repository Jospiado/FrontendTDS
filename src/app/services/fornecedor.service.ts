import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fornecedor } from '../models/fornecedor.model';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {
  private apiUrl = 'http://localhost:8080/fornecedores'; 

  constructor(private http: HttpClient) {}

  getFornecedores(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(this.apiUrl);
  }

  getFornecedorById(id: number): Observable<Fornecedor> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Fornecedor>(url);
  }

  criarFornecedor(fornecedor: Fornecedor): Observable<Fornecedor> {
    return this.http.post<Fornecedor>(this.apiUrl, fornecedor);
  }

  atualizarFornecedor(id: number, fornecedor: Fornecedor): Observable<Fornecedor> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Fornecedor>(url, fornecedor);
  }

  excluirFornecedor(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
  getPage(page: number , limit: number ): Observable<Fornecedor[]> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());

    return this.http.get<Fornecedor[]>(this.apiUrl, { params });
  }

  findByDescricao(palavra: String): Observable<Fornecedor[]>{
    
    return this.http.get<Fornecedor[]>(this.apiUrl+"/descricao?palavra="+palavra);
}
}
