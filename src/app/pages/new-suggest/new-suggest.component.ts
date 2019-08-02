import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-suggest',
  templateUrl: './new-suggest.component.html',
  styleUrls: ['./new-suggest.component.css']
})
export class NewSuggestComponent implements OnInit {

  valor:number = 0;
  step:number = 3;

  constructor() { }

  ngOnInit() {
  }
  siguienteStep(){
    if(this.valor<3 && this.valor>=0){
      this.valor = this.valor + 1;
      console.log(this.valor)
    }
  }
  anteriorStep(){
    if(this.valor <= 3 && this.valor>0){
      this.valor = this.valor - 1;
    }
  }
  enviar(){
    this.valor = this.valor + 1;
    console.log("enviando")
    }

}
