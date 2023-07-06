import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Touchscreen } from 'puppeteer';
import Swal from 'sweetalert2';
import { Usuario } from '../shared/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  nome?:string;
  senha?:string;

  private usuarioAutenticado : boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router,private http: HttpClient) { }

  buscarUsuario(usuario?: string) {
    const url = `http://localhost:8080/usuarios/nomeUsuario?nome=${usuario}`;
    return this.http.get(url);
  }
  
  fazerLogin(usuario: Usuario){

    this.buscarUsuario(usuario.nomeDeUsuario).subscribe(
      (data: Usuario)=>{
           this.nome=data.nomeDeUsuario;
           this.senha= data.senha

    if(usuario.nomeDeUsuario === this.nome && usuario.senha == this.senha){

      this.usuarioAutenticado = true

      this.mostrarMenuEmitter.emit(true);

        this.router.navigate(['/']);
    }else{
      
      Swal.fire("Inválido","Usuário ou senha inválidos!","error");
      this.usuarioAutenticado=false;

      this.mostrarMenuEmitter.emit(false);
    }

  }  )

  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
}
