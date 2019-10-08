import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
declare var jQuery:any;
@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {
  public forma:FormGroup;
  imagen1:any;
  imagen2:any;
  imagen3:any;
  imagen4:any;
  imagen5:any;
  imagen6:any;

  // @ViewChild('textEditor1',{static:true}) textEditor1:ElementRef
  // @ViewChild('textEditor2',{static:true}) textEditor2:ElementRef
  // @ViewChild('textEditor3',{static:true}) textEditor3:ElementRef
  // @ViewChild('textEditor4',{static:true}) textEditor4:ElementRef
  // @ViewChild('textEditor5',{static:true}) textEditor5:ElementRef
  // @ViewChild('textEditor6',{static:true}) textEditor6:ElementRef
  itemActual:number = 1;
  itemCargados:number[] = [1];
  position:number = 1;

  constructor() {
    console.log(this.itemCargados.length)
    this.forma = new FormGroup({
        textEditor1: new FormControl(''),
        textEditor2: new FormControl(''),
        textEditor3: new FormControl('')
    });
   }

  ngOnInit() {
    // jQuery(this.textEditor1.nativeElement).wysihtml5();
    // jQuery(this.textEditor2.nativeElement).wysihtml5();
    // jQuery(this.textEditor3.nativeElement).wysihtml5();
    // jQuery(this.textEditor4.nativeElement).wysihtml5();
    // jQuery(this.textEditor5.nativeElement).wysihtml5();
    // jQuery(this.textEditor6.nativeElement).wysihtml5();
  }
  guardarNuevoItem(){
    this.position++;
    this.itemCargados.push(this.position);
      console.log(this.itemCargados.length);
        console.log(this.position);

    this.itemActual = this.position;
      console.log(this.itemActual);
  }
  siguienteStep(){
    this.position++;
    this.itemActual = this.position;
  }
  anteriorStep(){
    this.position--;
    this.itemActual = this.position;
  }
  borrarItem(){
    // this.textEditor1.nativeElement.value = null;
    this.itemCargados.splice(this.itemCargados.length-1);
    this.position--;
    this.itemActual = this.position;
  }
  guardarCambios(forma){
    console.log(forma,this.imagen1)

  }

}
