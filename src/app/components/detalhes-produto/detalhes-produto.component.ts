import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {

  produto: Produto = {};
  message = '';
  debug = true;


  constructor(private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
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

  realizaBuca() {

  }
}
