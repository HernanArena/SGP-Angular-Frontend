import { Component, OnInit, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/services/search/search.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Router } from '@angular/router';
import { Filtro } from 'src/app/models/filtro.model';

@Component({
  selector: 'app-combo-modulo-objeto',
  templateUrl: './combo-modulo-objeto.component.html',
  styleUrls: ['./combo-modulo-objeto.component.css']
})
export class ComboModuloObjetoComponent implements OnInit {

  @Input() version:number;
  @Input() objetoPlaceHolder:string = "";
  @Input() moduloPlaceHolder:string = "";

  @Output('modulo') moduloSeleccionado:EventEmitter<string> = new EventEmitter();
  @Output('objeto') objetoSeleccionado:EventEmitter<string> = new EventEmitter();
  @Output('actualizaEstado') actualizaEstado:EventEmitter<boolean> = new EventEmitter();

  termino:string;
  modulos:any[] = [];
  objetos:any[] = [];
  filtroCargados:any;

  moduloSubscription:Subscription;
  ObjetoSubscription:Subscription;
  storeSubscription:Subscription;

  modulo:string;
  objeto:string;
  moduloFilter:string;

  moduloValido:boolean = false;
  objetoValido:boolean = false;

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
  }
  getModulos(termino:any){
    if(termino && termino.length >= 2){
      this.moduloSubscription = this._sp.getModulos(termino).subscribe(data => {
        this.modulos = data
      });
    }else{
      this._sp.getModulos(null)
      .subscribe(data => {this.modulos = data;});
    }
    if(this.filtroCargados === null || this.filtroCargados.modulo == undefined){
      let filtros = new Filtro(this.version,this.modulo,this.objeto,"");
      this._sp.cargarFiltrosStore(filtros);
    }
    this.emiteEstado();
  }
  seleccionaModulo(value:string){
    if(value){
      this.cd.markForCheck();
      this.modulo = value;
      this.moduloSeleccionado.emit(this.modulo);
      this.cd.detectChanges();
      let filtros = new Filtro(this.version,this.modulo,this.objeto,"");
      this._sp.cargarFiltrosStore(filtros);
    }else{
      this._sp.getModulos(null)
      .subscribe(data => {this.modulos = data;});
    }
    this.emiteEstado()
  }
  getObjetos(modulo:string,termino:string){
    if(modulo){
      termino==null?null:termino;
      this.ObjetoSubscription = this._sp.getObjetosConFiltro(modulo, termino).subscribe(data => {
        this.objetos = data;
      });
    }else{
        this.objetos = [];
    }
    this.emiteEstado()
  }
  seleccionaObjeto(value:string){
    if(value){
      this.cd.markForCheck();
      this.objeto = value;
      this.objetoSeleccionado.emit(this.objeto);
      this.emiteEstado();
      this.cd.detectChanges();
      if (this.store.select('filtro') == null ) {
          let filtros = new Filtro(this.version,this.modulo,this.objeto,"");
          this._sp.cargarFiltrosStore(filtros);
      }
      this._sp.AgregarObjetoStore(this.modulo, this.objeto);
    }else{
      this.ObjetoSubscription = this._sp.getObjetosConFiltro(this.modulo,null)
          .subscribe(data => {this.objetos = data});
    }
  }

  private emiteEstado() {
    if (this.moduloValido == true && this.objetoValido == true) {
      this.actualizaEstado.emit(true)
    }
    else {
      this.actualizaEstado.emit(false)
    }
  }

}
