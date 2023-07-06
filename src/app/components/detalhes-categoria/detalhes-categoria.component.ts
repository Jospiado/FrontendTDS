import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-detalhes-categoria',
  templateUrl: './detalhes-categoria.component.html',
  styleUrls: ['./detalhes-categoria.component.css']
})
export class DetalhesCategoriaComponent implements OnInit {

  categoria: Categoria = {};
  message = '';
  debug = true;


  constructor(private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getCategoria(this.route.snapshot.params['id']);
  }

  getCategoria(id: number): void {
    this.categoriaService.getCategoriaById(id)
      .subscribe(
        data => {
          this.categoria = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  realizaBuca() {

  }
}
