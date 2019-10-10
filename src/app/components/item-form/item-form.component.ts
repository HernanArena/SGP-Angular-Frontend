import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { Combo } from 'src/app/models/combo.model';
import { TicketPublicService } from 'src/app/services/ticket-public/ticket-public.service';
declare var jQuery:any;

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})

export class ItemFormComponent implements OnInit {
  public forma:FormGroup;
  imagen1:any = "";
  imagen2:any = "";
  imagen3:any = "";
  imagen4:any = "";
  imagen5:any = "";
  imagen6:any = "";
  item:any[]=[];
  public tipos: any[] = [];
  public tipo:any ="";
  public codigoError:Combo;
  public descrpError:Combo;

  tipoValido:boolean = false;

  // @ViewChild('textEditor1',{static:true}) textEditor1:ElementRef;
  // @ViewChild('textEditor2',{static:true}) textEditor2:ElementRef;
  // @ViewChild('textEditor3',{static:true}) textEditor3:ElementRef;
  // @ViewChild('textEditor4',{static:true}) textEditor4:ElementRef;
  // @ViewChild('textEditor5',{static:true}) textEditor5:ElementRef;
  // @ViewChild('textEditor6',{static:true}) textEditor6:ElementRef;
  itemActual:number = 1;
  itemCargados:number[] = [1];
  position:number = 1;

  constructor(private cd: ChangeDetectorRef,
              public _tp:TicketPublicService) {
    this.forma = new FormGroup({
        textEditor1: new FormControl(''),
        textEditor2: new FormControl(''),
        textEditor3: new FormControl(''),
        textEditor4: new FormControl(''),
        textEditor5: new FormControl(''),
        textEditor6: new FormControl('')
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
    this.itemActual = this.position;
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
  guardarCambios(forma:NgForm){
    for(let item of this.itemCargados){
      switch(item){
        case 1: this.item.push({USR_SPTERI_CODIGO:this.codigoError.codigo,
                                USR_SPTERI_NROITM:item,
                                USR_SPTERI_TEXTOS:forma.value.textEditor1,
                                USR_SPTERI_BMPBMP:this.imagen1.name});
                                forma.controls['textEditor1'].setValue("");
                                this.imagen1="";
        break;
        case 2: this.item.push({USR_SPTERI_CODIGO:this.codigoError.codigo,
                                USR_SPTERI_NROITM:item,
                                USR_SPTERI_TEXTOS:forma.value.textEditor2,
                                USR_SPTERI_BMPBMP:this.imagen2.name});
                                forma.controls['textEditor2'].setValue("");
                                this.imagen2="";
        break;
        case 3: this.item.push({USR_SPTERI_CODIGO:this.codigoError.codigo,
                                USR_SPTERI_NROITM:item,
                                USR_SPTERI_TEXTOS:forma.value.textEditor3,
                                USR_SPTERI_BMPBMP:this.imagen3.name});
                                forma.controls['textEditor3'].setValue("");
                                this.imagen3="";
        break;
        case 4: this.item.push({USR_SPTERI_CODIGO:this.codigoError.codigo,
                                USR_SPTERI_NROITM:item,
                                USR_SPTERI_TEXTOS:forma.value.textEditor4,
                                USR_SPTERI_BMPBMP:this.imagen4.name});
                                console.log(forma)
                                forma.controls['textEditor4'].setValue("");
                                this.imagen4="";
        break;
        case 5: this.item.push({USR_SPTERI_CODIGO:this.codigoError.codigo,
                                USR_SPTERI_NROITM:item,
                                USR_SPTERI_TEXTOS:forma.value.textEditor5,
                                USR_SPTERI_BMPBMP:this.imagen5.name});
                                forma.controls['textEditor5'].setValue("");
                                this.imagen5="";
        break;
        case 6: this.item.push({USR_SPTERI_CODIGO:this.codigoError.codigo,
                                USR_SPTERI_NROITM:item,
                                USR_SPTERI_TEXTOS:forma.value.textEditor6,
                                USR_SPTERI_BMPBMP:this.imagen6.name});
                                forma.controls['textEditor6'].setValue("");
                                this.imagen6="";
        break;
      }
    }
    this.itemActual = 1;
    this.itemCargados = [1];
    this.position = 1;
    if( this.tipo.codigo === "Error"){
      let errorControlado = {
        USR_SPTERH_TIPPUB: this.tipo.codigo,
        USR_SPTERH_CODIGO: this.codigoError.codigo,
        USR_SPTERH_DESCRP: this.descrpError.codigo,
        item:this.item
      }
      this._tp.postNuevoParte(this.tipo.codigo,errorControlado)
          .subscribe( data =>{
            console.log(data);
          })
    }


  }
  public getTipos(termino:string,evento:any){
    let regex = new RegExp('^Arrow?','i');
    termino==null || termino =="" || termino==undefined?null:termino;
    if(!regex.test(evento.key) && termino){
      return this.tipos = [{codigo:'Parte',
                            descripcion: 'Partes publicados'},
                            {codigo:'Error',
                            descripcion: 'Errores controlados'}];
    }
  }
  // recupera(termino,evento){
  //   console.log(termino,evento)
  // }
  public seleccionaTipo(value:any){
    if(value){
      this.cd.markForCheck();
      this.tipo = value;
      console.log(this.tipo)
      this.cd.detectChanges();
    }else{
      return this.tipos = [{codigo:'Parte',
                            descripcion: 'Partes publicados'},
                            {codigo:'Error',
                            descripcion: 'Errores controlados'}];
    }
  }

}
