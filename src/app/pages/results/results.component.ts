import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Parte } from 'src/app/models/parte.model';
import { ModificarOkToNavigate } from 'src/app/store/actions';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  partes:Parte[];
  storeSubscription:Subscription;
  partespaginados:Parte[];
  paginas:any[] = [];


  constructor(public store:Store<AppState>) {
    this.initResults();
    this.modificarOktonavigate();
  }

  ngOnInit() {
  }
  initResults(){
    this.storeSubscription = this.store.select('cargaresults').subscribe( data =>{
      this.partes = data.parte;
      this.paginas = this.calculoPaginaciones();
      this.partespaginados = this.recuperarPartes(1);
    })
  }

  cambiodePagina(pagina:number){
    this.partespaginados =  this.recuperarPartes(pagina);
  }

  recuperarPartes(pagina:number){

    let parteinicial:number;
    let topepagina:number = 5;
    let partespaginados:Parte[] = [];
    let i:number = 0

    parteinicial = pagina*topepagina-(topepagina)
    i = parteinicial

    do{
      if (this.partes[i] !== undefined){
          partespaginados.push(this.partes[i]);
      }
      i = i + 1
    }
    while(i<topepagina*pagina);

    return partespaginados;
  }

  calculoPaginaciones() {
    let cantidadpartes:number = this.partes.length
    let topepagina:number = 5
    let paginas:any[] = []
    let i:number;
    let paginasagregadas:number = 0;

    paginas.push(1);
    paginasagregadas = 1

    for (i = 1; i <= cantidadpartes; i++) {
      if (i%topepagina == 0) {
        paginasagregadas = paginasagregadas + 1
        paginas.push(paginasagregadas);
      }
    }

    return paginas
  };
  modificarOktonavigate(){
    this.store.dispatch(new ModificarOkToNavigate(false));
  }

}
