import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { ModalWizardService } from 'src/app/services/modal-wizard/modal-wizard.service';

@Component({
  selector: 'app-modal-wizard',
  templateUrl: './modal-wizard.component.html',
  styleUrls: ['./modal-wizard.component.css']
})
export class ModalWizardComponent implements OnInit {

  private descripcion:string;
  private texto:string;
  private codigo:string;
  public valor:number = 0;
  public step:number;
  public pasarPresentacion:boolean;
  private contenido:any[];


  constructor( public _mu:ModalWizardService) {
    this.init();
  }

  ngOnInit() {
    this.init();
  }
  cerrarModal(){
    this.valor = 0;
    this.pasarPresentacion = false;
    this.valor = 0
    this._mu.ocultarModal();
  }
  siguienteStep(){
    if(this.valor<6 && this.valor>=0){
      this.valor = this.valor + 1;
    }
  }
  anteriorStep(){
    if(this.valor <= 6 && this.valor>0){
      this.valor = this.valor - 1;
    }
  }
  iniciar(){
    this.pasarPresentacion = true;
  }
  init(){
    this.pasarPresentacion = this._mu.getPasarPresentacion();
    this.step = this._mu.getStep();
    this.codigo = this._mu.getCodigo();
    this.descripcion = this._mu.getDescripcion();
    this.contenido = this._mu.getContenido(this.valor);
    this.texto = this._mu.getTexto();
  }

}
