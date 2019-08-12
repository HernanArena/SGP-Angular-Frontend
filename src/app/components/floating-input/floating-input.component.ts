import { Component, OnInit, Input,  AfterViewChecked,EventEmitter, Output, ChangeDetectorRef, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Codigo } from 'src/app/models/codigo.model';
import { ValidationService } from 'src/app/services/validation/validation.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { Router, NavigationEnd } from '@angular/router';




@Component({
  selector: 'app-floating-input',
  templateUrl: './floating-input.component.html',
  styleUrls: ['./floating-input.component.css']
})
export class FloatingInputComponent implements OnInit,AfterViewChecked, OnDestroy {

  private forma:FormGroup;

  @Input('requerido') public required:boolean = false;
  @Input('minLength') public minLength:number;
  @Input('email')  public email:string;
  @Input('nombre')  public nombre:string;
  @Input('disabled')  public isenabledparam:boolean = false;
  @Input('valor')  public valor:string ="";
  @Input('') public floating:boolean = true;
  @Input('placeholder') public placeholder:string;
  @Input('array') public arrayItem:Codigo[]=[];
  @Output('actualizaValor') public cambioValor:EventEmitter<string> = new EventEmitter()
  @Output('valorSeleccionado') public valorFinal:EventEmitter<string> = new EventEmitter()
  @Output('actualizaEstado') public estado:EventEmitter<boolean> = new EventEmitter()

  private placeholderOlder:string;
  private valorSeleccionado:boolean = false;
  private valorValido:boolean;
  private texto:string = "";
  private mySubscription:Subscription;
  private focus:boolean = false;
  private termino:string = "";


  constructor(public _vs:ValidationService,private changeDetector : ChangeDetectorRef,private router:Router) {
    this.init();
    this.estado.emit(this.forma.get('inputFloating').valid);
    this.changeDetector.markForCheck();
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.router.navigated = false;
      }
    });

  }

  ngOnInit() {
    if(this.valor!=""){
      this.forma.controls['inputFloating'].setValue(this.valor);
    }
    this.changeDetector.markForCheck();
    this.createValidation();
    this.placeholderOlder = this.placeholder;
    this.valorSeleccionado = false;
  }
  ngAfterViewChecked(): void {
    this.changeDetector.detectChanges();
  }

  private recupera(data:any){
    this.texto = data.codigo+" - "+data.descripcion
    this.arrayItem = [];
    this.forma.controls['inputFloating'].setValue(this.texto);
    this.valorFinal.emit(data.codigo)
    this.placeholder = ""
    this.valorSeleccionado = true;
    this.focus=false;
    this.estado.emit(this.forma.get('inputFloating').valid);
  }

  private init(){
    this.forma = new FormGroup({
      'inputFloating': new FormControl('')
    });
    this.estado.emit(this.forma.get('inputFloating').valid);
  }
  private valid(){
    return this.texto === this.forma.controls['inputFloating'].value;
  }

  private createValidation(){
    let arrayValidations:any[] = [];
    if(this.required) arrayValidations.push({nombre:this.nombre,validation:'required'})
    if(this.minLength && this.minLength > 0 ) arrayValidations.push({nombre:this.nombre,validation:'minLength'})
    if(this.email) arrayValidations.push({nombre:this.nombre,validation:'email'})

    let validation = this._vs.addValidation(arrayValidations,this.minLength)
                              .filter((data)=>{
                                  return data.nombre == this.nombre})
                              .map((data)=> data.validation);

    this.forma.controls['inputFloating'].setValidators(validation);

  }
  private onChanges(newValue:any) {
    this.valorValidoenArray()
    console.log(this.termino.length);
    this.termino = newValue;
    //Emito valor al padre
    if(newValue.length >= this.minLength){
        this.cambioValor.emit(newValue)
    }else{
      this.placeholder = this.placeholderOlder
      this.cambioValor.emit(null);
    }
    //Emito estado valido o no al padre
    if (this.valorValido) {
        this.estado.emit(true);
    }else {
      this.estado.emit(false)
    }
  }

  private valorValidoenArray(){
    //Devuelve true si el valor elegido en el array es válido, false si no lo es

    if (this.valid() && this.forma.controls['inputFloating'].valid) {
      this.valorValido = true
    }else {
      this.valorValido = false
    }

  }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }
  onFocus(){
    this.focus = true;
    console.log(this.arrayItem.length)
    // if(this.arrayItem.length<=0){
    //     this.arrayItem = []
    // }
  }
  outFocus(){
    if(this.arrayItem.length<=0){
        this.focus=false;
        this.arrayItem = []
    }
  }
}
