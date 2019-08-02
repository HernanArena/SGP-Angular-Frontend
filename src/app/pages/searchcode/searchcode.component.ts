import { Component, OnInit } from '@angular/core';
import { Codigo } from 'src/app/models/codigo.model';
import { SearchcodeService } from 'src/app/services/searchcode/searchcode.service';
import { ModalWizardService } from 'src/app/services/modal-wizard/modal-wizard.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-searchcode',
  templateUrl: './searchcode.component.html',
  styleUrls: ['./searchcode.component.css']
})
export class SearchcodeComponent implements OnInit {

  errorCode:string;
  codigoSelect: Codigo[]=[];
  codigoSubscription:Subscription
  codigo:string;

  constructor(public _scs:SearchcodeService, public _ms:ModalWizardService) { }


  ngOnInit() {
  }

  getError(value:any){
    if(value){
      this.codigoSubscription = this._scs.getCodigoError(value).subscribe(data => {
        this.codigoSelect = data
      });
    }else{
        this.codigoSelect = [];
    }
    console.log(this.codigoSelect)
  }

  mostrarModal(){
    this._ms.mostrarModal('','');
  }
  //A pedido de her
  ngOnDestroy(): void {
  //  this.codigoSubscription.unsubscribe();
  }
}
