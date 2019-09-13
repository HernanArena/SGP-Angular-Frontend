import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SearchcodeComponent } from './searchcode.component';

const searchCodeRoutes:Routes = [
  { path: 'controlados',
   component: SearchcodeComponent,
   data:{ titulo:"Busqueda por código"}
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(searchCodeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SearchcodeRoutingModule { }
