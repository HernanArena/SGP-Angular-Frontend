import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Parte } from 'src/app/models/parte.model';
import { ModificarOkToNavigate } from 'src/app/store/actions';
import { ModalWizardService } from 'src/app/services/modal-wizard/modal-wizard.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']

})
export class ResultsComponent implements OnInit {

  partes:Parte[];
  storeSubscription:Subscription;
  cantidadPartes:number = 0;
  parteAVisualizar:any;

  constructor(public store:Store<AppState>, public _ms:ModalWizardService) {
    this.initResults();
    this.modificarOktonavigate();
  }

  ngOnInit() {
  }
  initResults(){
    this.storeSubscription = this.store.select('cargaresults').subscribe( data =>{
      this.partes = data.parte;
      this.cantidadPartes = data.count
    })
  }

  modificarOktonavigate(){
    this.store.dispatch(new ModificarOkToNavigate(false));
  }

  seleccionaParte(parteSeleccionado:any){
    this.store.select('cargaresults').subscribe(data=>{
       let indexvalue = data.parte.findIndex((parte)=> parte.codigo == parteSeleccionado.codigo)
       this.parteAVisualizar = data.parte[indexvalue]
    })

    this._ms.setStep(this.parteAVisualizar.items.length);
    this._ms.setCodigo(this.parteAVisualizar.codigo);
    this._ms.setDescripcion(this.parteAVisualizar.descripcion);
    this._ms.setTexto(this.parteAVisualizar.texto);
    this._ms.setContenido(this.parteAVisualizar.items);

    this.mostrarModal()
  }

  mostrarModal(){
    this._ms.mostrarModal('','');
  }

}
