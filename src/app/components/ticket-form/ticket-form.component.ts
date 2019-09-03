import { Component, OnInit, Input, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { TicketFormService } from 'src/app/services/ticket-form/ticket-form.service';
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
  @Input('titulo') public titulo:string = "";
  @Input('subtitulo') public subtitulo:string = "";
  @Input('mensajeFinal') public mensajeFinal:string = "";

  //Valores devueltos de las peticiones
  private contactos: Combo[] = [];
  private versiones:any[] = [];
  private modulos:any[] = [];


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
  private getContactos(termino:string,evento:any){
    let regex = new RegExp('^Arrow?','i');
    console.log(termino);
    termino==null || termino =="" || termino==undefined?null:termino;
    if(!regex.test(evento.key) && termino){
        console.log(termino);
      return this._cb.getContacto(this.razonSocial,termino)
      .subscribe((data)=>{
        this.contactos = data
      });
    }
  }
  seleccionaContacto(value:any){
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
      console.log(data)
      this.contactos = data
    });
  }
  getVersiones(termino:string,evento:any){
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
