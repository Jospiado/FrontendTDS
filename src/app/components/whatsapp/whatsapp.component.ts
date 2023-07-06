import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.css']
})
export class WhatsappComponent implements OnInit {
  produto: Produto = {};
  debug=true;
  numero="";
  submitted=false;
  constructor(private produtoService: ProdutoService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getProduto(this.route.snapshot.params['id']);
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
  enviarMensagem(produto: Produto, numero: String): void{
    var mensagem = "*Descrição:* "+produto.descricao+"\n"+"*Código:* "+produto.id+"\n"+"*Preço:* R$ "+produto.preco+"\n"+"*Categoria:* "+produto.categoria?.nome;
    
    mensagem = window.encodeURIComponent(mensagem);

    // console.log(mensagem);
    if(numero.length!=0){
    window.open("https://api.whatsapp.com/send?phone=55" + numero + "&text=" + mensagem, "_blank");
  }
  }
  
}
