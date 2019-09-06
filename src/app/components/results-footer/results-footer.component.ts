import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results-footer',
  templateUrl: './results-footer.component.html',
  styleUrls: ['./results-footer.component.css']
})
export class ResultsFooterComponent implements OnInit {


  @Input('titulo') titulo:string="";
  @Input('boton1') boton1:string="";
  @Input('link1') link1:string;
  @Input('awesomeboton1') awesomeboton1:string="";
  @Input('boton2') boton2:string="";
  @Input('link2') link2:string;
  @Input('awesomeboton2') awesomeboton2:string="";

  constructor(private router:Router) {
  }

  ngOnInit() {
  }

  enlace1(){
    this.router.navigate([this.link1])
  }
  enlace2(){
    this.router.navigate([this.link2])
  }

}
