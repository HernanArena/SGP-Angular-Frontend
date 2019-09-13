import { NgModule } from '@angular/core';
import { AuthService} from './index';
import { HttpClientModule} from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { TicketService } from './ticket/ticket.service';
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
    AuthService,
    TicketService,
    FinderService,
    ValidationService,
    ModalWizardService,
    TicketFormService
  ]
})
export class ServicesModule { }
