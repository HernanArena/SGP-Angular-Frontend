import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { Combo } from 'src/app/models/combo.model';
import { TicketPublicService } from 'src/app/services/ticket-public/ticket-public.service';
import {Md5} from 'ts-md5/dist/md5';

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
    let imagen:any = "";
    let archivos:any[]=[];
    for(let item of this.itemCargados){
      switch(item){
        case 1: imagen = this.hashing(this.imagen1.name);
                archivos.push({file: this.imagen1, name: imagen});
                this.item.push({USR_SPTERI_CODIGO:this.codigoError.codigo,
                                USR_SPTERI_NROITM:item,
                                USR_SPTERI_TEXTOS:forma.value.textEditor1,
                                USR_SPTERI_BMPBMP: imagen});
                                forma.controls['textEditor1'].setValue("");
                                this.imagen1="";
        break;
        case 2: imagen = this.hashing(this.imagen2.name);
                archivos.push({file: this.imagen2, name: imagen});
                this.item.push({USR_SPTERI_CODIGO:this.codigoError.codigo,
                                USR_SPTERI_NROITM:item,
                                USR_SPTERI_TEXTOS:forma.value.textEditor2,
                                USR_SPTERI_BMPBMP:imagen});
                                forma.controls['textEditor2'].setValue("");
                                this.imagen2="";
        break;
        case 3: imagen = this.hashing(this.imagen3.name);
                archivos.push({file: this.imagen3, name: imagen});
                this.item.push({USR_SPTERI_CODIGO:this.codigoError.codigo,
                                USR_SPTERI_NROITM:item,
                                USR_SPTERI_TEXTOS:forma.value.textEditor3,
                                USR_SPTERI_BMPBMP:imagen});
                                forma.controls['textEditor3'].setValue("");
                                this.imagen3="";
        break;
        case 4: imagen = this.hashing(this.imagen4.name);
                archivos.push({file: this.imagen4, name: imagen});
                this.item.push({USR_SPTERI_CODIGO:this.codigoError.codigo,
                                USR_SPTERI_NROITM:item,
                                USR_SPTERI_TEXTOS:forma.value.textEditor4,
                                USR_SPTERI_BMPBMP:imagen});
                                console.log(forma)
                                forma.controls['textEditor4'].setValue("");
                                this.imagen4="";
        break;
        case 5: imagen = this.hashing(this.imagen5.name);
                archivos.push({file: this.imagen5, name: imagen});
                this.item.push({USR_SPTERI_CODIGO:this.codigoError.codigo,
                                USR_SPTERI_NROITM:item,
                                USR_SPTERI_TEXTOS:forma.value.textEditor5,
                                USR_SPTERI_BMPBMP:imagen});
                                forma.controls['textEditor5'].setValue("");
                                this.imagen5="";
        break;
        case 6: imagen = this.hashing(this.imagen6.name);
                archivos.push({file: this.imagen6, name: imagen});
                this.item.push({USR_SPTERI_CODIGO:this.codigoError.codigo,
                                USR_SPTERI_NROITM:item,
                                USR_SPTERI_TEXTOS:forma.value.textEditor6,
                                USR_SPTERI_BMPBMP:imagen});
                                forma.controls['textEditor6'].setValue("");
                                this.imagen6="";
        break;
      }
    }
    if( this.tipo.codigo === "Error"){
      let errorControlado = {
        USR_SPTERH_TIPPUB: this.tipo.codigo,
        USR_SPTERH_CODIGO: this.codigoError.codigo,
        USR_SPTERH_DESCRP: this.descrpError.codigo,
        item:this.item
      }
      this.itemActual = 1;
      this.itemCargados = [1];
      this.position = 1;
      this.codigoError = null;
      this.descrpError = null;
      console.log(errorControlado);
      this._tp.postNuevoParte(errorControlado.USR_SPTERH_TIPPUB, errorControlado)
      .subscribe( data =>{
        console.log(data);
        this._tp.postArchivoParte(errorControlado.USR_SPTERH_TIPPUB, errorControlado.USR_SPTERH_CODIGO, archivos)
            .subscribe( data =>{
              console.log(data);
            });
      },(error)=>{
        console.log(error);
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
  private hashing(archivo):string{

    let d = new Date();

    if(archivo){
      let nombre = archivo.split(".")
      return `${Md5.hashStr(nombre[0] + d.getTime().toString())}.${nombre[1]}`
    }
    return '';
  }

}
