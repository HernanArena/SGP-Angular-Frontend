import { Component, OnInit, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Router } from '@angular/router';
import { Filtro } from 'src/app/models/filtro.model';
import { ComboService } from 'src/app/services/combo/combo.service';

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
  @Output('comboEstado') comboEstado:EventEmitter<boolean> = new EventEmitter();

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

  constructor(public _cb:ComboService,
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
  getModulos(termino:any,evento:any){
    let regex = new RegExp('^Arrow?','i');
    if(!regex.test(evento.key)){
      if(termino){
        this.moduloSubscription = this._cb.getModulos(termino).subscribe(data => {
          this.modulos = data
        });
      }else{
        this._cb.getModulos(null)
        .subscribe(data => {
          this.modulos = data;
        });
      }
      if(this.filtroCargados === null || this.filtroCargados.modulo == undefined){
        let filtros = new Filtro(this.version,this.modulo,this.objeto,"");
        this._cb.cargarFiltrosStore(filtros);
      }
    }
  }
  seleccionaModulo(value:string){
    this.termino = value
    if(value){
      this.cd.markForCheck();
      this.modulo = value;
      this.moduloSeleccionado.emit(this.modulo);
      this.cd.detectChanges();
      let filtros = new Filtro(this.version,this.modulo,this.objeto,"");
      this._cb.cargarFiltrosStore(filtros);
    }else{
      this._cb.getModulos(null)
      .subscribe(data => {
        this.modulos = data;});
    }
  }
  getObjetos(modulo:string,termino:string,evento:any){
    let regex = new RegExp('^Arrow?','i');
    if(!regex.test(evento.key)){
        if(termino && modulo){
          termino = termino==null?null:termino;
          this.ObjetoSubscription = this._cb.getObjetos(modulo, termino).subscribe(data => {
            this.objetos = data;
          });
        }else if(modulo){
          this.ObjetoSubscription = this._cb.getObjetos(this.modulo,null)
              .subscribe(data => {
                this.objetos = data
              });
        }else if(termino){
          this.ObjetoSubscription = this._cb.getObjetos(null, termino).subscribe(data => {
            this.objetos = data;
          });
        }else{
          this.ObjetoSubscription = this._cb.getObjetos(null,null)
              .subscribe(data => { this.objetos = data });
        }
        this._cb.AgregarObjetoStore(this.modulo, this.objeto);
    }
  }

  seleccionaObjeto(value:string){
    this.termino = value
    if(value){
      this.cd.markForCheck();
      this.objeto = value;
      this.objetoSeleccionado.emit(this.objeto);
      console.log(this.moduloValido + ' ' + this.objetoValido)
      if (this.moduloValido && this.objetoValido) {
        console.log('entro valido')
        this.comboEstado.emit(true)
      }
      this.cd.detectChanges();
      if (this.store.select('filtro') == null ) {
          let filtros = new Filtro(this.version,this.modulo,this.objeto,"");
          this._cb.cargarFiltrosStore(filtros);
      }
    }else if(this.modulo){
      console.log(this.modulo);
      this.ObjetoSubscription = this._cb.getObjetos(this.modulo,null)
          .subscribe(data => { this.objetos = data });
    }else{
      this.ObjetoSubscription = this._cb.getObjetos(null,null)
          .subscribe(data => { this.objetos = data });
    }

    this._cb.AgregarObjetoStore(this.modulo, this.objeto);
  }

}
