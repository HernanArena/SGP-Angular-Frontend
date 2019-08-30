import { Component, OnInit, Input, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { TicketFormService } from 'src/app/services/ticket-form/ticket-form.service';
import { contacto } from 'src/app/models/contacto.model';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { Filtro } from 'src/app/models/filtro.model';
import { NgForm } from '@angular/forms';
import { Combo } from 'src/app/models/combo.model';
import { ComboService } from 'src/app/services/combo/combo.service';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit {

  //Parametrización
  @Input('titulo') public titulo:string = "Sugerencia";
  @Input('subtitulo') public subtitulo:string = "Ingrese la sugerencia";
  @Input('mensajeFinal') public mensajeFinal:string = "Gracias por enviarnos una sugerencia";
  // private contactos:contacto[] = [];

  //Valores devueltos de las peticiones
  @Input('contactos') public contactos: Combo[] = [];
  @Input('versiones') public versiones:any[] = [];
  @Input('modulos') public modulos:any[] = [];


  private valor:number = 0;
  private step:number = 3;

  //valores ingresados keyup
  private termino:string;
  private filtroCargados:any;
  private storeSubscription:Subscription;
  private descripcion:string="";

  //valor recuperado del input
  private razonSocial:string;
  private contacto:string;
  private version:number;
  private modulo:string;
  private objeto:string;



  //Estados
  private contactoValid:boolean = false;
  private versionValid:boolean = false;
  private moduloValid:boolean = false;
  private objetoValid:boolean = false;
  private asuntoValid:boolean = false;
  private disabled:boolean = true;
  private estadoValid:boolean = false;
  private valorActual:string = "";
  constructor(public _tf:TicketFormService,
              public _cb:ComboService,
              private router:Router,
              private store:Store<AppState>,
              private cd: ChangeDetectorRef) {
    this.store.select('usuario').subscribe((data)=>{
      this.razonSocial = data.user.empresa.name;
    });
    this.storeSubscription = this.store.subscribe(data =>{
      this.filtroCargados = data.filtro.filtro
      if(data.cargaresults.oktonavigate){
           this.router.navigate(['/resultados']);
        }
    });
  }

  ngOnInit() {
  }
  guardar(forma:NgForm){
    console.log("formulario posteado");
    console.log("NgForm: ",forma);
    console.log("Valor: ",forma.value);
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
  private getState(){
    return this.contactos;
  }
  private getContactos(termino:string){
      termino==null || termino =="" || termino==undefined?null:termino;
      return this._tf.getContacto(this.razonSocial,termino)
      .subscribe((data)=>{
        this.contactos = data
      });
  }
  private getAllContactos(){
    return this._tf.getContacto(this.razonSocial,null)
    .subscribe((data)=>{
      this.contactos = data
    });
  }
  getVersiones(termino:string){
    if(termino){
      this._cb.getVersiones(termino).subscribe(data => {
        this.versiones = data;
      });
    }else{
      this.versiones = [];
    }
  }
  seleccionaVersion(value:any){
    if(value){
      this.cd.markForCheck();
      this.version = value;
      this.cd.detectChanges();
      let filtros = new Filtro(this.version,this.modulo,this.objeto,"");
      this._cb.cargarFiltrosStore(filtros);
    }else{
      this._cb.getVersiones(null)
      .subscribe(data => {this.versiones = data;});
    }
  }


}
