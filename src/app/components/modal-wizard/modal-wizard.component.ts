import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { ModalWizardService } from 'src/app/services/modal-wizard/modal-wizard.service';

@Component({
  selector: 'app-modal-wizard',
  templateUrl: './modal-wizard.component.html',
  styleUrls: ['./modal-wizard.component.css']
})
export class ModalWizardComponent implements OnInit {
  descripcion:string ="Esto es un string largo recortado en 50 caracteres recortados en 50"
  codigo:string = "GR0003"

  valor:number = 0;
  step:number = 4;
  pasarPresentacion:boolean = false;


  constructor( public _mu:ModalWizardService) {


   }

  ngOnInit() {
  }
  cerrarModal(){
    this.pasarPresentacion = false;
    this._mu.ocultarModal();
  }
  siguienteStep(){
    if(this.valor<6 && this.valor>=0){
      this.valor = this.valor + 1;
    }
  }
  anteriorStep(){
    console.log();
    if(this.valor <= 6 && this.valor>0){
      this.valor = this.valor - 1;
    }
  }
  iniciar(){
    this.pasarPresentacion = true;
  }

}
