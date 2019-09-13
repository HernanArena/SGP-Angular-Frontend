import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ResultsModule } from './results/results.module';
import { SearchRoutingModule } from './search-routing.module';



@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PipesModule,
    SearchRoutingModule,
    ResultsModule,
  ],
  exports: [
    SearchComponent,
  ]
})
export class SearchModule { }
