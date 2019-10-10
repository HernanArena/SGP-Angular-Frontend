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
import { MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatExpansionModule, MatListModule, MatTooltipModule} from '@angular/material';
import { AngularAutocompleteComponent } from './angular-autocomplete/angular-autocomplete.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ResultsFooterComponent } from './results-footer/results-footer.component';
import { RouterModule } from '@angular/router';
import { DragzoneMultipleComponent } from './dragzone-multiple/dragzone-multiple.component';
import { DirectiveModule } from '../directives/directive.module';
import { CarrouselMultipleComponent } from './carrousel-multiple/carrousel-multiple.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { ImagenComponent } from './imagen/imagen.component';

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
    DragzoneMultipleComponent,
    CarrouselMultipleComponent,
    AccordionComponent,
    ItemFormComponent,
    ImagenComponent
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
    DirectiveModule,
    MatExpansionModule,
    MatListModule,
    MatTooltipModule
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
    MatListModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    AngularAutocompleteComponent,
    PaginationComponent,
    ResultsFooterComponent,
    DragzoneMultipleComponent,
    CarrouselMultipleComponent,
    AccordionComponent,
    ItemFormComponent,
    ImagenComponent
  ]
})
export class ComponentsModule { }
