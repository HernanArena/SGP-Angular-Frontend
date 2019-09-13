import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-new-suggest',
  templateUrl: './new-suggest.component.html',
  styleUrls: ['./new-suggest.component.css']
})
export class NewSuggestComponent implements OnInit {


  private razonSocial:any;


  constructor(public store:Store<AppState>) {
  }

  ngOnInit() {
    this.recuperaUser();
  }

  private recuperaUser(){
    this.store.select('usuario').subscribe( data =>{
      this.razonSocial = data.user.empresa.name;
    });
  }


}
