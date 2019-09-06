import { NgModule } from '@angular/core';
import { UsuarioService} from './index';
import { HttpClientModule} from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { SearchService } from './search/search.service';
import { FinderService } from './finder/finder.service';

import { ValidationService } from './validation/validation.service';
import { ModalWizardService } from './modal-wizard/modal-wizard.service';
import { TicketFormService } from './ticket-form/ticket-form.service';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    UsuarioService,
    SearchService,
    FinderService,
    ValidationService,
    ModalWizardService,
    TicketFormService
  ]
})
export class ServicesModule { }
