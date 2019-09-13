import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewSuggestComponent } from './new-suggest.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { NewSuggestRoutingModule } from './new-suggest-routing.module';



@NgModule({
  declarations: [
    NewSuggestComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PipesModule,
    NewSuggestRoutingModule
  ],
  exports: [
    NewSuggestComponent,
  ]
})
export class NewSuggestModule { }
