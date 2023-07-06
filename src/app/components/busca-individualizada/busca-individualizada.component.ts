// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ConfiguracaoBusca } from 'src/app/models/configuracao-busca.model';
// import { Item } from 'src/app/models/item.model';
// import { Parceiro } from 'src/app/models/parceiro.model';
// import { ConfiguracaoBuscaService } from 'src/app/services/configuracao-busca.service';
// import { ItemService } from 'src/app/services/item.service';

// @Component({
//   selector: 'app-busca-individualizada',
//   templateUrl: './busca-individualizada.component.html',
//   styleUrls: ['./busca-individualizada.component.css']
// })
// export class BuscaIndividualizadaComponent implements OnInit {

//   item: Item = {
//     item: '',
//     descricao: '',
//     barras: '',
//     quantidadeEstoque: 0,
//     preco: 0,
//     precominimo: 0,
//     referencia: '',
//     marca: '',
//     parceiro: {},
//   };

//   message='';
//   debug: boolean = true;
//   parametroBusca: String | undefined;
//   selected = this.configuracaoCollection;
//   configuracaoCollection? : ConfiguracaoBusca[];
//   confBusca: String | undefined;
//   constructor(private itemService: ItemService,private route: ActivatedRoute,
//     private router: Router,private configuracaoService: ConfiguracaoBuscaService) { }

//   ngOnInit(): void {
//     this.getItem(this.route.snapshot.params['id']);
//     this.retrieveConfiguracao();
//   }

//   getItem(id: string): void {
//     this.itemService.get(id)
//       .subscribe(
//         data => {
//           this.item = data;
//           if (this.debug) console.log(data);
//         },
//         error => {
//           console.log(error);
//         });
//   }
//   retrieveConfiguracao(): void{
//     this.configuracaoService.getAll()
//       .subscribe(
//         data => {
//           this.configuracaoCollection = data;
//           if (this.debug) console.log(data);
//         },
//         error => {
//           console.log(error);
//         });
//   }

//   fazerBusca() {
//     const data = {
//       confbuca: this.confBusca,
//       item: this.item,
//       parametroBusca: this.parametroBusca,
//     }
//     console.log(data);

//     this.configuracaoService.start3(data)
//     .subscribe(
//       (response) => {
//               if (this.debug) console.log(response);
//               this.message = response.message
//                 ? response.message
//                 : 'Deu Certo!';
//             },
//             (error) => {
//               console.log(error);
//             });
//   }

// }
