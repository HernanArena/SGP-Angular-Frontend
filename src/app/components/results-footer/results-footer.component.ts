import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results-footer',
  templateUrl: './results-footer.component.html',
  styleUrls: ['./results-footer.component.css']
})
export class ResultsFooterComponent implements OnInit {


  @Input('titulo') titulo:string="Si no encuentra la solución adecuada puede cargar un nuevo parte aquí";
  @Input('boton1') boton1:string=" Volver ";
  @Input('awesomeboton1') awesomeboton1:string="fa fa-arrow-left";
  @Input('boton2') boton2:string=" Nuevo Parte ";
  @Input('awesomeboton2') awesomeboton2:string="fa fa-pencil-square-o";

  constructor() { }

  ngOnInit() {
  }

}
