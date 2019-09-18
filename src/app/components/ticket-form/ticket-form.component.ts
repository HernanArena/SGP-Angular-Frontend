import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { TicketFormService } from 'src/app/services/ticket-form/ticket-form.service';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Filtro } from 'src/app/models/filtro.model';
import { Combo } from 'src/app/models/combo.model';
import { ComboService } from 'src/app/services/combo/combo.service';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit {

  //Parametrización
  @Input('titulo') public titulo:string = "";
  @Input('subtitulo') public subtitulo:string = "";
  @Input('mensajeFinal') public mensajeFinal:string = "";

  //Valores devueltos de las peticiones
  public contactos: Combo[] = [];
  public versiones:any[] = [];
  public modulos:any[] = [];


  public valor:number = 0;
  public step:number = 3;

  //valores ingresados keyup
  public termino:string;
  public terminoAsunto:any = null;
  public descripcion:string = "";
  public contacto:string = "";
  public version:any = "";
  public modulo:any = "";
  public objeto:any = "";
  public razonSocial:string = "";
  //valor seteado desde el store


  //valor recuperado del input
  @Input('contacto') public valorContacto:string = "";
  @Input('version') public valorVersion:any = "";
  @Input('modulo') public valorModulo:string = "";
  @Input('objeto') public valorObjeto:string = "";
  @Input('razonSocial') public valorRazonSocial:string;


  //Estados
  public contactoValid:boolean = false;
  public versionValid:boolean = false;
  public moduloValid:boolean = false;
  public objetoValid:boolean = false;
  public asuntoValid:boolean = false;
  public disabled:boolean = true;
  public estadoValid:boolean = false;
  public valorActual:string = "";

  constructor(public _tf:TicketFormService,
              public _cb:ComboService,
              private router:Router,
              private store:Store<AppState>,
              private cd: ChangeDetectorRef) {
          // if(this.valorModulo) this.modulo = this.valorModulo;
          // if(this.valorObjeto) this.objeto = this.valorObjeto;
          // if(this.valorContacto) this.contacto = this.valorContacto;
          // if(this.valorVersion) this.version = this.valorVersion;
          // if(this.valorRazonSocial) this.razonSocial = this.valorRazonSocial;

  }

  ngOnInit() {
    if(this.valorModulo) this.modulo = this.valorModulo;
    if(this.valorObjeto) this.objeto = this.valorObjeto;
    if(this.valorContacto) this.contacto = this.valorContacto;
    if(this.valorVersion) this.version = this.valorVersion;
    if(this.valorRazonSocial) this.razonSocial = this.valorRazonSocial;
  }


  private siguienteStep(){
    this.disabled = false;
    if(this.valor<3 && this.valor>=0){
       this.valor = this.valor + 1;
    }
  }
  private anteriorStep(){
    if(this.valor <= 3 && this.valor>0){
      this.valor = this.valor - 1;
    }
  }
  private enviar(){
    this.valor = this.valor + 1;
  }
  public getState(){
    return this.contactos;
  }
  public getContactos(termino:string,evento:any){
    let regex = new RegExp('^Arrow?','i');
    termino==null || termino =="" || termino==undefined?null:termino;
    if(!regex.test(evento.key) && termino){
      return this._cb.getContacto(this.razonSocial,termino)
      .subscribe((data)=>{
        this.contactos = data
      });
      this._cb.AgregarContactoStore(this.contacto);
    }
  }
  public seleccionaContacto(value:any){
    console.log(value)
    if(value){
      this.cd.markForCheck();
      this.contacto = value;
      this.cd.detectChanges();
    }else{
      this.getAllContactos();
    }
  }
  private getAllContactos(){
    return this._cb.getContacto(this.razonSocial,null)
    .subscribe((data)=>{
      this.contactos = data
    });
  }
  public getVersiones(termino:string,evento:any){
    let regex = new RegExp('^Arrow?','i');
    console.log(termino);
    termino==null || termino =="" || termino==undefined?null:termino;
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
    if(value){
      this.cd.markForCheck();
      this.version = value;
      this.cd.detectChanges();
      let filtros = new Filtro(this.version,this.modulo,this.objeto,"","");
      this._cb.cargarFiltrosStore(filtros);
    }else{
      this._cb.getVersiones(null)
      .subscribe(data => {this.versiones = data;});
    }
  }
  public getAsunto(termino:any,evento:any){
    let regex = new RegExp('^Arrow?','i');
    if(!regex.test(evento.key)){
      if(termino){
        termino.codigo = termino && termino.codigo ==""  && evento.key!="Backspace"?evento.key:termino.codigo;
        this.terminoAsunto = termino.codigo
      }
    }
  }


}
