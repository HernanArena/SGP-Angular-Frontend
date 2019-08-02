import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import { UsuarioService } from '../services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
  loading:boolean;
  subscription:Subscription;

  constructor(public store:Store<AppState>,
              public _us:UsuarioService ) { }

  ngOnInit() {
    this.subscription = this.store.select('ui').subscribe( ui => this.loading = ui.isLoading);
  }
  onSubmit(data:any){
    this._us.login(data.usuario,data.password);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
