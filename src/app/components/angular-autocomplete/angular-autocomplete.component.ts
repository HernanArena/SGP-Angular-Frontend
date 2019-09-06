import { Component, OnInit, Input, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Combo } from 'src/app/models/combo.model';
import { ValidationService } from 'src/app/services/validation/validation.service';

@Component({
  selector: 'app-angular-autocomplete',
  templateUrl: './angular-autocomplete.component.html',
  styleUrls: ['./angular-autocomplete.component.css']
})
export class AngularAutocompleteComponent implements OnInit {
  private forma:FormGroup;
  options: FormGroup;
  focus: boolean;

  //Data Input
  @Input('array') public arrayItem:Combo [] = [];
  @Input('nombre')  public nombre:string = "";
  @Input('placeholder') public placeholder:string;
  @Input('valor') public valor:string = "";

  //Validation input
  @Input('email')  public email:string = "";
  @Input('requerido') public required:boolean = false;
  @Input('disabled') public disabled:boolean = false;
  @Input('validar') public validar:boolean = true;

  //Value Output
  @Output('actualizaEstado') public estado:EventEmitter<boolean> = new EventEmitter()
  @Output('actualizaValor') public cambioValor:EventEmitter<string> = new EventEmitter()
  @Output('valorSeleccionado') public valorFinal:EventEmitter<string> = new EventEmitter()
  //valores recuperados
  private termino:string ="";
  private valorSeleccionado: string;

  //Define si el usuario esta seleccionando valor correcto
  private seleccionoValor: boolean

  constructor(public _vs:ValidationService,
              private changeDetector : ChangeDetectorRef) {
    this.init();
  }

  ngOnInit() {
    if(this.valor!=""){
      this.forma.controls['inputFloating'].setValue(this.valor);
    }
    this.changeDetector.markForCheck();
    this.createValidation();
    //Para que comience emitiendo un valor true si el campo no es requerido
    if (!this.required){
      this.estado.emit(true);
    }
  }

  private init(){
    this.forma = new FormGroup({
      inputFloating: new FormControl('')
    });
  }
  private valid():boolean{
    return (this.arrayItem.length>0 && this.arrayItem.filter( data => {
      return data.codigo.toString().concat(' - ').concat(data.descripcion.toString()) == this.termino
    }).length>0) || this.termino == ''
  }
  getPosts(evento:any){
    this.valorSeleccionado = evento;
  }
  private onChanges(newValue:any) {
    this.termino = newValue;
    if(!this.valid() || !this.forma.get('inputFloating').valid){
      this.estado.emit(false);
      this.valorFinal.emit('');
      this.cambioValor.emit('')
    }else {
      this.estado.emit(true);
    }
    //Emito valor al padre
    if(this.seleccionoValor == false){
      this.cambioValor.emit(newValue)
    }
    else{
      this.seleccionoValor = false
    }

  }

  private createValidation(){
    let arrayValidations:any[] = [];
    if(this.required) arrayValidations.push({nombre:this.nombre,validation:'required'});
    if(this.email) arrayValidations.push({nombre:this.nombre,validation:'email'});

    let validation = this._vs.addValidation(arrayValidations)
                              .filter((data)=>{
                                  return data.nombre == this.nombre})
                              .map((data)=> data.validation);

    this.forma.controls['inputFloating'].setValidators(validation);
  }
  private seleccionaValor(item:any){
    this.seleccionoValor = true
    this.estado.emit(true);
    this.valorFinal.emit(item.codigo);
    this.cambioValor.emit(item.codigo)
  }

  private borraValorSeleccionado(event:any){
    if (event.key != "Enter") {
        this.valorSeleccionado = ""
    }
  }

}
