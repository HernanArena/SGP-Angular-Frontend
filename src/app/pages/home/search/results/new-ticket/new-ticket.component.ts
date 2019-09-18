import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css']
})
export class NewTicketComponent implements OnInit {

  public modulo:any;
  public version:any;
  public objeto:any;
  public contacto:any;
  public razonSocial:any;

  storeSubscription:Subscription;

  constructor(public store:Store<AppState>) {
    this.recuperaUser();
    this.recuperaFiltro();
  }

  //Funciones auxiliares
  private recuperaFiltro(){
    this.store.select('filtro').subscribe( data =>{
      let version:any = data.filtro.version;
      let modulo:any = data.filtro.modulo;
      let objeto:any = data.filtro.objeto;
      let contacto:any = data.filtro.contacto;

      if(version) this.version = version.codigo +" - "+ version.descrip;
      if(modulo) this.modulo = modulo.codigo +" - "+ modulo.descrip;
      if(objeto) this.objeto = objeto.codigo +" - "+ objeto.descrip;
      if(contacto) this.contacto = contacto.codigo +" - "+ contacto.descrip;

    });
  }
  private recuperaUser(){
    this.store.select('usuario').subscribe( data =>{
      this.razonSocial = data.user.empresa.name;
    });
  }

  ngOnInit() {
    this.recuperaUser();
    this.recuperaFiltro();
  }

}
