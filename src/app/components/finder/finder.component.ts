import { Component, OnInit, OnDestroy, Input, Output } from '@angular/core';
import { FinderService } from 'src/app/services/finder/finder.service';
import { Parte } from 'src/app/models/parte.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { CargarPartes } from 'src/app/store/actions';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from 'src/app/services/validation/validation.service';


@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})

export class FinderComponent implements OnInit,OnDestroy {
  private forma:FormGroup;

  @Input('botonvalido')  public botonValido:boolean = true;
  @Input('recuperaStore') public  recuperaStore:boolean = false;
  @Input('requerido') public required:boolean = false;
  @Input('minLength') public minLength:number = 0;
  @Input('nombre')  public nombre:string = "";

  partes:Parte[];
  _termino:string ="";
  storeSubscription:Subscription;

  constructor(public _fs:FinderService,
              public store:Store<AppState>,
              public _vs: ValidationService) {
    this.init();
    this.storeSubscription = this.store.select('filtro').subscribe( data => {
      console.log(data);
      if(data.filtro != null && this.recuperaStore){
          this._termino = data.filtro.termino;
      }else{
        this._termino = "";
      }
    })
  }

  ngOnInit() {
    this.createValidation();
  }

  navegararesultsyguardarstorage(){
    if(this._termino){
      this._fs.guardarTerminoStore(this._termino);
    }
    this.store.dispatch(new CargarPartes(this._termino));
  }
  ngOnDestroy(): void {
      this.storeSubscription.unsubscribe();
  }
  private init(){
    this.forma = new FormGroup({
      'textArea': new FormControl('')
    });
  }
  private createValidation(){
    let arrayValidations:any[] = [];
    if(this.required) arrayValidations.push({nombre:this.nombre,validation:'required'})
    if(this.minLength && this.minLength > 0 ) arrayValidations.push({nombre:this.nombre,validation:'minLength'})

    let validation = this._vs.addValidation(arrayValidations,this.minLength)
                              .filter((data)=>{
                                  return data.nombre == this.nombre})
                              .map((data)=> data.validation);

    this.forma.controls['textArea'].setValidators(validation);
  }
}
