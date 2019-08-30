import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './results.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ResultsRoutingModule } from './results-routing.module';
import { NewTicketModule } from './new-ticket/new-ticket.module';



@NgModule({
  declarations: [
    ResultsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PipesModule,
    ResultsRoutingModule,
    NewTicketModule
  ],
  exports:[

  ]
})
export class ResultsModule { }
