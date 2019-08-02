//module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//components
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule} from '@angular/router';
//Routes
import { PAGES_ROUTING } from './pages-routing.module';
import { SearchComponent } from './search/search.component';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { ResultsComponent } from './results/results.component';
import { SearchcodeComponent } from './searchcode/searchcode.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { NewSuggestComponent } from './new-suggest/new-suggest.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SearchComponent,
    HomeComponent,
    NewTicketComponent,
    ResultsComponent,
    SearchcodeComponent,
    NewSuggestComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PAGES_ROUTING,
    ComponentsModule,
    RouterModule,
    SharedModule
  ],
  exports:[
    DashboardComponent,
    SearchComponent,
    SearchcodeComponent,
    NewSuggestComponent
  ]
})
export class PagesModule { }
