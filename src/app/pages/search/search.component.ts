import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { Filtro } from 'src/app/models/filtro.model'
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Router } from '@angular/router';
import { ComboService } from 'src/app/services/combo/combo.service';
import { SearchService } from 'src/app/services/search/search.service';
import { CargarBeforeRouteAction, CargarAfterRouteAction } from 'src/app/store/actions';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{


  private termino:string = "";
  private objeto:string = "";
  private modulo:string = "";
  private versiones:any[] = [];
  private filtroCargados:any;
  private storeSubscription:Subscription;
  private version:number;
  private versionValida:boolean = false;
  private estado:boolean = true;
  private anterior:string = "";


  constructor(public _cb:ComboService,
              public _sp:SearchService,
              public store:Store<AppState>,
              private router:Router,
              private cd: ChangeDetectorRef) {


    this.storeSubscription = this.store.subscribe(data =>{
      this.filtroCargados = data.filtro.filtro;
      this.anterior = data.navigation.rutaActual;
      if(data.cargaresults.oktonavigate){
           this.router.navigate(['/resultados']);
        }
    });


  }

  ngOnInit() {
    this._sp.getDataRoute().subscribe( (data)=>{
      let route = {
        after: this.anterior,
        before: data.titulo
      }
      this.store.dispatch(new CargarBeforeRouteAction(route))
      this.store.dispatch(new CargarAfterRouteAction(route))
    });

  };
  private getVersiones(termino:string,evento:any){
    let regex = new RegExp('^Arrow?','i');

    if(!regex.test(evento.key)){
      if(termino){
        this._cb.getVersiones(termino).subscribe(data => {
          this.versiones = data;
        });
      }else{
        this._cb.getVersiones(null)
        .subscribe(data => {this.versiones = data;});
      }
    }
  }

  private seleccionaVersion(value:any){

    if(value || value == ''){

      this.cd.markForCheck();
      this.version = value;
      this.cd.detectChanges();

      let filtros = new Filtro(this.version,this.modulo,this.objeto,"");

      this._sp.cargarFiltrosStore(filtros);

      if(!this.filtroCargados){
        let filtros = new Filtro(this.version,this.modulo,this.objeto,"");
        this._cb.cargarFiltrosStore(filtros);
      }

    }else{
      this._cb.getVersiones(null)
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
        this._cb.cargarFiltrosStore(filtros);
    }
    this._cb.AgregarVersionStore(version);
  }

  loguea() {
    console.log(this.estado)
  }
//A pedido de her
  ngOnDestroy(): void {

  //  this.moduloSubscription.unsubscribe();
    //this.storeSubscription.unsubscribe();
  }


}
