import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { HomeRoutingModule } from './home-routing.module';
import { SearchModule } from './search/search.module';
import { NewSuggestModule } from './new-suggest/new-suggest.module';
import { SearchcodeModule } from './searchcode/searchcode.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PipesModule,
    HomeRoutingModule,
    SearchModule,
    NewSuggestModule,
    SearchcodeModule
  ],
  exports: [
    HomeComponent,
    SearchModule,
    NewSuggestModule,
    SearchcodeModule
  ]
})
export class HomeModule { }
