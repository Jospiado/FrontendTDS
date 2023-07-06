import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fornecedor } from 'src/app/models/fornecedor.model';
import { FornecedorService } from 'src/app/services/fornecedor.service';

@Component({
  selector: 'app-detalhes-fornecedor',
  templateUrl: './detalhes-fornecedor.component.html',
  styleUrls: ['./detalhes-fornecedor.component.css']
})
export class DetalhesFornecedorComponent implements OnInit {

  fornecedor: Fornecedor = {};
  message = '';
  debug = true;


  constructor(private fornecedorService: FornecedorService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getFornecedor(this.route.snapshot.params['id']);
  }

  getFornecedor(id: number): void {
    this.fornecedorService.getFornecedorById(id)
      .subscribe(
        data => {
          this.fornecedor = data;
          if (this.debug) console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  realizaBuca() {

  }
}
