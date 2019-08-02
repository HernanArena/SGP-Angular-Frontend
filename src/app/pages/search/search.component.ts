import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService } from 'src/app/services/search/search.service';
import { Subscription } from 'rxjs';
import { Filtro } from 'src/app/models/filtro.model'
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit,OnDestroy{


  termino:string;
  partes:any = "";
  modulos:any[] = [];
  objetos:any[] = [];
  filtroCargados:any;

  moduloSubscription:Subscription;
  ObjetoSubscription:Subscription;
  storeSubscription:Subscription;

  modulo:string;
  version:number;
  objeto:string;
  moduloFilter:string;

  constructor(public _sp:SearchService,
              public store:Store<AppState>,
              private router:Router) {
    // this.moduloSubscription = this._sp.getmodulos().subscribe(modulos=>{
    //   this.modulos = modulos;
    // });
    this.storeSubscription = this.store.subscribe(data =>{
      this.filtroCargados = data.filtro.filtro
      if(data.cargaresults.oktonavigate){
           this.router.navigate(['/resultados']);
        }
    })
    // this.storeSubscription = this.store.select('cargaresults').subscribe(data=>{
    //   if(data.oktonavigate){
    //      this.router.navigate(['/resultados']);
    //   }
    // });
  }

  ngOnInit() {

  };
  getModulos(value:any){
    if(value){
      this.moduloSubscription = this._sp.getmodulos(value).subscribe(data => {
        this.modulos = data
      });
    }else{
        this.modulos = [];
    }
    if(this.filtroCargados === null || this.filtroCargados.modulo == undefined){
      let filtros = new Filtro(this.version,this.modulo,this.objeto,"");
      this._sp.cargarFiltrosStore(filtros);
    }
  }
  cargarModulo(value){
    if(value){
      if(this.filtroCargados === null || this.filtroCargados.modulo == undefined){
        let filtros = new Filtro(this.version,this.modulo,this.objeto,"");
        this._sp.cargarFiltrosStore(filtros);
      }
     this.moduloFilter = value;
    }
  }
  getObjetos(value:any){
    if(value){
      console.log(value)
      this.ObjetoSubscription = this._sp.getObjetosConFiltro(value).subscribe(data => {
        this.objetos = data.filter((data:any) => {return data.modulo === this.moduloFilter});
      });
    }else{
        this.modulos = [];
    }
  }
  recuperarVersion(version:number){
    if(version){
      this.version = version;
    }
  }
  // recuperarModulos(modulo:string){
  //   this.modulo = modulo;
  //   this.objetos = this._sp.getObjetosConFiltro(modulo);
  // }
  recuperarObjeto(objeto:string){
    this.objeto = objeto;
  }

  grabaFiltroVersion(version:number){
    this.recuperarVersion(version);

    if (this.store.select('filtro') == null ) {
        let filtros = new Filtro(version,this.modulo,this.objeto,"");
        this._sp.cargarFiltrosStore(filtros);
    }
    this._sp.AgregarVersionStore(version);
  }

  grabaFiltroObjeto(objeto:string){
    this.recuperarObjeto(objeto);

    if (this.store.select('filtro') == null ) {
        let filtros = new Filtro(this.version,this.modulo,objeto,"");
        this._sp.cargarFiltrosStore(filtros);
    }
    this._sp.AgregarObjetoStore(this.modulo, objeto);
  }



  ngOnDestroy(): void {
    this.moduloSubscription.unsubscribe();
    this.storeSubscription.unsubscribe();
  }
}
