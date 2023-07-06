import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../shared/models/usuario.model';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  nomeUsuario: string = "";
  senha: string ="";
  mensagemErro: string ="";

  usuario: Usuario = new Usuario()

  constructor(private router: Router, private authService: AuthService) {}

  login() {
    // // Simulação de um backend com autenticação falsa
    // if (this.nomeUsuario === 'admin' && this.senha === 'admin') {
    //   // Autenticação bem-sucedida, redirecionar para a página inicial
    //   this.router.navigate(['/']);
    // } else {
    //   // Credenciais inválidas, exibir mensagem de erro
    //   this.mensagemErro = 'Credenciais inválidas. Por favor, tente novamente.';
    // }
    this.authService.fazerLogin(this.usuario);
  }
}
