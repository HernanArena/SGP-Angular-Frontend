import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NewSuggestComponent } from './new-suggest.component';

const newSuggestRoutes:Routes =[
  { path: 'sugerencias',
   component: NewSuggestComponent,
   data:{ titulo:"Sugerencias"}
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(newSuggestRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class NewSuggestRoutingModule { }
