import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchcodeComponent } from './searchcode.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SearchcodeRoutingModule } from './searchcode-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    SearchcodeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    PipesModule,
    SearchcodeRoutingModule,
    ComponentsModule
  ],
  exports:[
    SearchcodeComponent
  ]
})
export class SearchcodeModule { }
