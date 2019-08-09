import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { TicketFormService } from 'src/app/services/ticket-form/ticket-form.service';
import { contacto } from 'src/app/models/contacto.model';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit {

  // @Input('contactos') public contactos:contacto[] = [];
  @Input('versiones') public versiones:any[] = [];
  @Input('titulo') public titulo:string = "Sugerencia";
  @Input('subtitulo') public subtitulo:string = "Ingrese la sugerencia";
  @Input('mensajeFinal') public mensajeFinal:string = "Gracias por enviarnos una sugerencia";
  private contactos:contacto[] = [];
  private valor:number = 0;
  private step:number = 3;
  public razonSocial:string;
  termino:string;
  contacto:string;

  private contactoValid:boolean = false;
  private versionValid:boolean = false;
  private moduloValid:boolean = false;
  private objetoValid:boolean = false;
  private asuntoValid:boolean = false;
  private disabled:boolean = true;

  constructor(private _tf:TicketFormService,private store:Store<AppState>) {
    this.store.select('usuario').subscribe((data)=>{
      this.razonSocial = data.user.empresa.name;
    });
  }

  ngOnInit() {
  }
  siguienteStep(){
    this.disabled = false;
    if(this.valor<3 && this.valor>=0){
       this.valor = this.valor + 1;
    }
  }
  anteriorStep(){
    if(this.valor <= 3 && this.valor>0){
      this.valor = this.valor - 1;
    }
  }
  enviar(){
    this.valor = this.valor + 1;
  }

  getContacto(termino:any){
    console.log(termino);
    return this._tf.getContacto(this.razonSocial,termino)
    .subscribe((data)=>{this.contactos = data});
  }
}
