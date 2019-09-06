import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mostrar:boolean = false;
  constructor(private store:Store<AppState>,
              public _sp:SearchService) {
    this.store.select("navigation").subscribe((nav)=>{
      this._sp.getDataRoute().subscribe( (data)=>{
        nav.rutaActual = data.titulo;
      });

    });
  }

  ngOnInit() {
  }
  mostrarlo(){
    this.mostrar = !this.mostrar;
  }

}
