import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mostrar:boolean = false;
  constructor() { }

  ngOnInit() {
  }
  mostrarlo(){
    this.mostrar = !this.mostrar;
  }

}
