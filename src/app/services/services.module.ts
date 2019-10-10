import { NgModule } from '@angular/core';
import { AuthService} from './index';
import { HttpClientModule} from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { TicketService } from './ticket/ticket.service';
import { FinderService } from './finder/finder.service';

import { ValidationService } from './validation/validation.service';
import { ModalWizardService } from './modal-wizard/modal-wizard.service';
import { TicketFormService } from './ticket-form/ticket-form.service';
import { ThemeService } from './theme/theme.service';
import { NewManualService } from './new-manual/new-manual.service';
import { TicketPublicService } from './ticket-public/ticket-public.service';

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
    TicketFormService,
    ThemeService,
    NewManualService,
    TicketPublicService
  ]
})
export class ServicesModule { }
