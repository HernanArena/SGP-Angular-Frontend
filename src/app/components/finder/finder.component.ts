import { Component, OnInit, OnDestroy } from '@angular/core';
import { FinderService } from 'src/app/services/finder/finder.service';
import { Parte } from 'src/app/models/parte.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { CargarPartes } from 'src/app/store/actions';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})

export class FinderComponent implements OnInit,OnDestroy {

  partes:Parte[];
  _termino:string;
  storeSubscription:Subscription;

  constructor(public _fs:FinderService,
              public store:Store<AppState>) {
    this.storeSubscription = this.store.select('filtro').subscribe( data => this._termino = data.filtro.termino)
  }

  ngOnInit() {
  }
  navegararesultsyguardarstorage(){
    if(this._termino){
      this._fs.guardarTerminoStore(this._termino);
    }
    this.store.dispatch(new CargarPartes(this._termino));
  }
  ngOnDestroy(): void {
      this.storeSubscription.unsubscribe();
  }


}
