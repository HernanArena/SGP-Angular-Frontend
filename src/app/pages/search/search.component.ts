import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
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
export class SearchComponent implements OnInit{


  termino:string;
  modulo:string;
  objeto:string;
  versiones:any[] = [];
  filtroCargados:any;
  storeSubscription:Subscription;
  version:number;
  versionValida:boolean = false;


  constructor(public _sp:SearchService,
              public store:Store<AppState>,
              private router:Router,
              private cd: ChangeDetectorRef) {

    this.storeSubscription = this.store.subscribe(data =>{
      this.filtroCargados = data.filtro.filtro
      if(data.cargaresults.oktonavigate){
           this.router.navigate(['/resultados']);
        }
    });
  }

  ngOnInit() {
  };
  getVersiones(termino:string,evento:any){
    let regex = new RegExp('^Arrow?','i');
    if(!regex.test(evento.key)){
      if(termino){
        this._sp.getVersiones(termino).subscribe(data => {
          this.versiones = data;
        });
      }else{
        this._sp.getVersiones(null)
        .subscribe(data => {this.versiones = data;});
      }
    }
  }
  seleccionaVersion(value:any){
    if(value){
      this.cd.markForCheck();
      this.version = value;
      this.cd.detectChanges();
      let filtros = new Filtro(this.version,this.modulo,this.objeto,"");
      this._sp.cargarFiltrosStore(filtros);
    }else{
      this._sp.getVersiones(null)
      .subscribe(data => {this.versiones = data;});
    }
  }
  recuperarVersion(version:number){
    if(version){
      this.version = version;
    }
  }
  grabaFiltroVersion(version:number){
    this.recuperarVersion(version);

    if (this.store.select('filtro') == null ) {
        let filtros = new Filtro(version,this.modulo,this.objeto,"");
        this._sp.cargarFiltrosStore(filtros);
    }
    this._sp.AgregarVersionStore(version);
  }
//A pedido de her
  ngOnDestroy(): void {
  //  this.moduloSubscription.unsubscribe();
    //this.storeSubscription.unsubscribe();
  }
}
