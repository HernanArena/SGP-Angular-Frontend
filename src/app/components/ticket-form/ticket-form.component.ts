import { Component, OnInit, Input } from '@angular/core';
import { TicketFormService } from 'src/app/services/ticket-form/ticket-form.service';
import { contacto } from 'src/app/models/contacto.model';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit {

  @Input('contactos') public contactos:contacto[] = [];
  @Input('versiones') public versiones:any[] = [];
  @Input('versiones') public titulo:string = "Sugerencia";
  @Input('versiones') public subtitulo:string = "Ingrese la sugerencia";
  @Input('versiones') public mensajeFinal:string = "Gracias por enviarnos una sugerencia";

  private valor:number = 0;
  private step:number = 3;
  private nrocta:string;

  private contactoValid:boolean = false;
  private versionValid:boolean = false;
  private moduloValid:boolean = false;
  private objetoValid:boolean = false;
  private asuntoValid:boolean = false;
  private disabled:boolean = true;

  constructor(private _tf:TicketFormService) { }

  ngOnInit() {

  }
  siguienteStep(){
    this.disabled = false;
    if(this.valor<3 && this.valor>=0){
       this.valor = this.valor + 1;
      // switch(this.valor){
      //   case 0: if(this.contactoValid){
      //               this.disabled = true;
      //               this.valor = this.valor + 1;
      //             }
      //     break;
      //   case 1: if(this.comentarioValid){
      //             this.disabled = true;
      //             this.valor = this.valor + 1;
      //           }
      //     break
      //   case 2:
      //             this.disabled = true;
      //             this.valor = this.valor + 1;
      //
      //     break
      // }
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

  getContacto(){
    let nrocta = this.nrocta;
    this._tf.getContacto(nrocta);
  }
}
