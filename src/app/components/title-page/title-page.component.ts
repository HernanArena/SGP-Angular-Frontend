import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.css']
})
export class TitlePageComponent implements OnInit {

  @Input('titulo') titulo:string;
  @Input('descrip') descrip:string;
  @Input('fontawsome') fontawsome:string = '';
  @Input('colorRibbon') color:string;

  constructor() { }

  ngOnInit() {
  }
  addClass(){
    return this.fontawsome;
  }
  addColor(){
    return this.color
  }

}
