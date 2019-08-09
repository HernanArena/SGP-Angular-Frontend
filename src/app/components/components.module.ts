import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinderComponent } from './finder/finder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FloatingInputComponent } from './floating-input/floating-input.component';
import { TitlePageComponent } from './title-page/title-page.component';
import { ModalWizardComponent } from './modal-wizard/modal-wizard.component';
import { StepBystepComponent } from './step-bystep/step-bystep.component';
import { PipesModule } from '../pipes/pipes.module';
import { TicketFormComponent } from './ticket-form/ticket-form.component';


@NgModule({
  declarations: [
    FinderComponent,
    FloatingInputComponent,
    TitlePageComponent,
    ModalWizardComponent,
    StepBystepComponent,
    TicketFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule
  ],
  exports:[
    FinderComponent,
    FloatingInputComponent,
    TitlePageComponent,
    ModalWizardComponent,
    StepBystepComponent,
    TicketFormComponent
  ]
})
export class ComponentsModule { }
