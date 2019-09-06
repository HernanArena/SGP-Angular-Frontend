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

  @Input() public version:number;
  @Input() public objetoPlaceHolder:string = "";
  @Input() public moduloPlaceHolder:string = "";

  @Output('modulo') public moduloSeleccionado:EventEmitter<string> = new EventEmitter();
  @Output('objeto') public objetoSeleccionado:EventEmitter<string> = new EventEmitter();
  @Output('comboEstado') public comboEstado:EventEmitter<boolean> = new EventEmitter();

  private terminoModulo:string;
  private terminoObjeto:string;

  private modulos:any[] = [];
  private objetos:any[] = [];
  private filtroCargados:any;

  private moduloSubscription:Subscription;
  private ObjetoSubscription:Subscription;
  private storeSubscription:Subscription;

  private modulo:string;
  private objeto:string;
  private moduloFilter:string;

  private moduloValido:boolean = false;
  private objetoValido:boolean = false;

  constructor(public _cb:ComboService,
              public store:Store<AppState>,
              private router:Router,
              private cd: ChangeDetectorRef) {
                this.comboEstado.emit(true);
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
    let modulo:any[];
    if(this.objetos.length>0 && this.terminoObjeto){
      modulo = this.objetos.filter((data)=>{
        return (data.codigo + " - "+data.descripcion) == this.terminoObjeto
      });
      if(modulo.length>0) modulo = modulo[0].modulo
      else this.terminoObjeto =  null
    }
    if(!regex.test(evento.key)){
      if(termino){
        this.moduloSubscription = this._cb.getModulos(termino).subscribe(data => {
          if(this.objetos.length>0 && this.terminoObjeto) {
            data.filter((data)=>{return data.codigo === modulo});
          }
          this.modulos = data
        });
      }else{
        this._cb.getModulos(null)
        .subscribe(data => {
          if(this.objetos.length>0 && this.terminoObjeto) {
            data = data.filter((data)=>{return data.codigo === modulo});
          }
          this.modulos = data;
        });
      }
      if(this.filtroCargados === null || this.filtroCargados.modulo == undefined){
        let filtros = new Filtro(this.version,this.modulo,this.objeto,"");
        this._cb.cargarFiltrosStore(filtros);
      }
      this.comboEstado.emit(this.moduloValido);
    }


  }
  seleccionaModulo(value:string){

    let modulo:any[];
    if(this.objetos.length>0 && this.terminoObjeto){
      modulo = this.objetos.filter((data)=>{
        return (data.codigo + " - "+data.descripcion) == this.terminoObjeto
      });
      if(modulo.length>0) modulo = modulo[0].modulo
      else this.terminoObjeto =  null
    }
    if(value || value == ''){
      this.cd.markForCheck();
      this.modulo = value;
      this.moduloSeleccionado.emit(this.modulo);
      this.cd.detectChanges();
      this.terminoModulo = this.modulo
      let filtros = new Filtro(this.version,this.modulo,this.objeto,"");
      this._cb.cargarFiltrosStore(filtros);
    }else{
      this._cb.getModulos(null)
      .subscribe(data => {
        if(this.objetos.length>0 && this.terminoObjeto) {
          data = data.filter((data)=>{return data.codigo === modulo});
        }
        this.modulos = data;});
    }
    this.comboEstado.emit(this.moduloValido);
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
    this.comboEstado.emit(this.moduloValido);
  }


  seleccionaObjeto(value:string){

    if(value || value == ''){
      this.cd.markForCheck();
      this.objeto = value;
      this.objetoSeleccionado.emit(this.objeto);
      this.terminoObjeto = this.objeto
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
    this.comboEstado.emit(this.moduloValido);
  }


}
