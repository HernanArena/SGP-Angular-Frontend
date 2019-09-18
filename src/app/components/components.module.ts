import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinderComponent } from './finder/finder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitlePageComponent } from './title-page/title-page.component';
import { ModalWizardComponent } from './modal-wizard/modal-wizard.component';
import { StepBystepComponent } from './step-bystep/step-bystep.component';
import { PipesModule } from '../pipes/pipes.module';
import { TicketFormComponent } from './ticket-form/ticket-form.component';
import { ComboModuloObjetoComponent } from './combo-modulo-objeto/combo-modulo-objeto.component';
import { MatAutocompleteModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { AngularAutocompleteComponent } from './angular-autocomplete/angular-autocomplete.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ResultsFooterComponent } from './results-footer/results-footer.component';
import { RouterModule } from '@angular/router';
import { DragzoneMultipleComponent } from './dragzone-multiple/dragzone-multiple.component';
import { DirectiveModule } from '../directives/directive.module';

@NgModule({
  declarations: [
    FinderComponent,
    TitlePageComponent,
    ModalWizardComponent,
    StepBystepComponent,
    TicketFormComponent,
    ComboModuloObjetoComponent,
    AngularAutocompleteComponent,
    PaginationComponent,
    ResultsFooterComponent,
    DragzoneMultipleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    DirectiveModule
  ],
  exports:[
    FinderComponent,
    TitlePageComponent,
    ModalWizardComponent,
    StepBystepComponent,
    TicketFormComponent,
    ComboModuloObjetoComponent,
    PipesModule,
    PaginationComponent,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    AngularAutocompleteComponent,
    PaginationComponent,
    ResultsFooterComponent,
    DragzoneMultipleComponent
  ]
})
export class ComponentsModule { }
