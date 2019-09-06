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
  }

  private init(){
    this.forma = new FormGroup({
      inputFloating: new FormControl('')
    });
  }
  private valid():boolean{
    return (this.arrayItem.length>0 && this.arrayItem.filter( data => {
      return data.codigo.toString().concat(' - ').concat(data.descripcion.toString()) == this.termino
    }).length>0) || this.termino == ""
  }
  getPosts(evento:any){
    this.valorSeleccionado = evento;
  }
  private onChanges(newValue:any) {
    this.termino = newValue;
    if(this.valid() && this.forma.get('inputFloating').valid){
      this.estado.emit(true);
      this.valorFinal.emit(this.termino);
    }else{
      this.estado.emit(false);
    }
    this.estado.emit(this.valid());
    console.log(this.valid())
    //Emito valor al padre
    this.cambioValor.emit(newValue);
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

}
