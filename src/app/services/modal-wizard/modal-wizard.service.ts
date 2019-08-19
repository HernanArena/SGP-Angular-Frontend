import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalWizardService {
  public tipo:string;
  public id:string;

  private pasarPresentacion: boolean = false;
  private step:number = 0;
  private descripcion:string = "";
  private codigo:string = "";
  private contenido:any[] = [];
  private texto:string = "";
  private valor:number = 0;

  public oculto:string = 'oculto';

  public notificacion = new EventEmitter<any>();

  constructor() {


   }
   setPasarPresentacion(value:boolean){
     this.pasarPresentacion = value;
   }
   getPasarPresentacion(){
     return this.pasarPresentacion;
   }
   setStep(value:number){
     this.step = value;
   }
   getStep(){
     return this.step;
   }
   setDescripcion(value:string){
     this.descripcion = value;
   }
   getDescripcion(){
     return this.descripcion;
   }
   setCodigo(value:string){
     this.codigo = value;
   }
   getCodigo(){
     return this.codigo;
   }
   setContenido(value:any[]){
     this.contenido = value;
     console.log(this.contenido);
   }
   getContenido(value:number){
     console.log(value);
     console.log(this.contenido[value]);
     return this.contenido[value];
   }
   setTexto(value:string){
     this.texto = value;
   }
   getTexto(){
     return this.texto;
   }
   ocultarModal(){
     this.oculto = 'oculto';
     this.tipo = null;
     this.id = null;

   }
   mostrarModal(tipo:string,id:string){
     this.oculto = '';
     this.tipo = tipo;
     this.id = id;
   }
}
