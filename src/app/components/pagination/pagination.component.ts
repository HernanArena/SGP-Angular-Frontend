import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { CargarPartes } from 'src/app/store/actions';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() tope:number;
  @Input() cantidadResultados:number;

  termino:string;
  storeSubscription:Subscription;
  paginas:number[] = [];
  paginaActual:number = 1;
  offset:number = 0;
  limit:number


  constructor(public store:Store<AppState>) {
    this.storeSubscription = this.store.select('filtro').subscribe( data =>{
      this.termino = data.filtro.termino;
    })
  }

  ngOnInit() {
      this.paginas = [];
      let cantidadPaginas = Math.floor(this.cantidadResultados/this.tope) + 1
      if (this.cantidadResultados == 0) {
        cantidadPaginas = 0
      }
      for (let i = 1; i <= cantidadPaginas; i++) {
          this.paginas.push(i)
      }
      this.limit = this.tope
  }

  cambiodePagina(numeroPagina:number){
    this.paginaActual = numeroPagina;
    this.offset = (numeroPagina*this.tope) - this.tope
    this.limit = numeroPagina*this.tope
    this.store.dispatch(new CargarPartes(this.termino, this.offset, this.limit))
  }

  anterior(){
    this.paginaActual = this.paginaActual-1;
    this.offset = this.offset - this.tope
    this.limit = this.limit - this.tope
    this.store.dispatch(new CargarPartes(this.termino, this.offset, this.limit))

  }

  siguiente(){
    this.paginaActual = this.paginaActual+1;
    this.offset = this.offset + this.tope
    this.limit = this.limit + this.tope
    this.store.dispatch(new CargarPartes(this.termino, this.offset, this.limit))
  }
}
