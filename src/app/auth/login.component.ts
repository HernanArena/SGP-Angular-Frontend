import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import { AuthService } from '../services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
  loading:boolean;
  subscription:Subscription;
  loaded:boolean = false;

  constructor(public store:Store<AppState>,
              public _us:AuthService ) { }

  ngOnInit() {
    this.subscription = this.store.select('ui').subscribe( ui => {
      this.loaded = !ui.isLoading
    });
  }
  onSubmit(data:any){
    this._us.login(data.usuario,data.password);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
