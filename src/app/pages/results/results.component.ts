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

  mostrarModal(){
    this._ms.mostrarModal('','');
  }

}
