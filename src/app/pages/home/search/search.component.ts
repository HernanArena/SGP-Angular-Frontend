import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { Filtro } from 'src/app/models/filtro.model'
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { TicketService, ComboService } from 'src/app/services';
import { CargarBeforeRouteAction, CargarAfterRouteAction } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{


  public termino:string = "";
  public objeto:string = "";
  public modulo:string = "";
  public versiones:any[] = [];
  private filtroCargados:any;
  private storeSubscription:Subscription;
  public version:string;
  public versionValida:boolean = false;
  public estado:boolean = true;
  public anterior:string = "";


  constructor(public _cb:ComboService,
              public _sp:TicketService,
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
  public getVersiones(termino:string,evento:any){
    let regex = new RegExp('^Arrow?','i')
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

  public seleccionaVersion(value:any){
    if(value || value == ''){
      this.cd.markForCheck();
      this.version = value;
      this.cd.detectChanges();
      let filtros = new Filtro(this.version,this.modulo,this.objeto,"","");
      this._sp.cargarFiltrosStore(filtros);
      if(!this.filtroCargados){
        let filtros = new Filtro(this.version,this.modulo,this.objeto,"","");
        this._cb.cargarFiltrosStore(filtros);
      }
    }else{
      this._cb.getVersiones(null)
      .subscribe(data => {this.versiones = data;});
    }
  }
  public grabaFiltroVersion(version:string){
    if (this.store.select('filtro') == null ) {
        let filtros = new Filtro(version,this.modulo,this.objeto,"","");
        this._cb.cargarFiltrosStore(filtros);
    }
    this._cb.AgregarVersionStore(version);
  }

//A pedido de her
  ngOnDestroy(): void {

  //  this.moduloSubscription.unsubscribe();
    //this.storeSubscription.unsubscribe();
  }

}
