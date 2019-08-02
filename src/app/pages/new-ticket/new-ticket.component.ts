import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css']
})
export class NewTicketComponent implements OnInit {

  _version:number;
  _modulo:string;
  _objeto:string;
  _descripcionerror:string;
  storeSubscription:Subscription;

  constructor(public store:Store<AppState>) {
    this.storeSubscription = this.store.select('filtro').subscribe(data=>{
      if (data.filtro.version) {
          this._version = data.filtro.version
      }
    });

    this.storeSubscription = this.store.select('filtro').subscribe(data=>{
      if (data.filtro.modulo) {
          this._modulo = data.filtro.modulo;
      }
    });

    this.storeSubscription = this.store.select('filtro').subscribe(data=>{
      if (data.filtro.objeto) {
          this._objeto = data.filtro.objeto
      }
    });
  }

  ngOnInit() {
  }

  guardar(form:any){
    console.log(this._version);
  }
}
