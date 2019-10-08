import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {
  public tipos: any[] = [];
  public tipo:string = "";
  tipoValido:boolean = false;
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  public getTipos(termino:string,evento:any){
    let regex = new RegExp('^Arrow?','i');
    termino==null || termino =="" || termino==undefined?null:termino;
    if(!regex.test(evento.key) && termino){
      return this.tipos = [{codigo:'Parte',
                            descripcion: 'Partes publicados'},
                            {codigo:'Error',
                            descripcion: 'Errores controlados'}];
    }
  }
  recupera(termino,evento){
    console.log(termino,evento)
  }
  public seleccionaTipo(value:any){
    if(value){
      this.cd.markForCheck();
      this.tipo = value;
      console.log(this.tipo)
      this.cd.detectChanges();
    }else{
      return this.tipos = [{codigo:'Parte',
                            descripcion: 'Partes publicados'},
                            {codigo:'Error',
                            descripcion: 'Errores controlados'}];
    }
  }

}
