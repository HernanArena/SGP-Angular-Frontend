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
import { SearchcodeComponent } from './searchcode/searchcode.component';
import { SharedModule } from '../shared/shared.module';
import { NewSuggestComponent } from './new-suggest/new-suggest.component';
import { PipesModule } from '../pipes/pipes.module';
import { ResultsModule } from './results/results.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SearchComponent,
    HomeComponent,
    SearchcodeComponent,
    NewSuggestComponent,
    ProfileComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PAGES_ROUTING,
    ComponentsModule,
    RouterModule,
    SharedModule,
    PipesModule,
    ResultsModule
  ],
  exports:[
    DashboardComponent,
    SearchComponent,
    SearchcodeComponent,
    NewSuggestComponent
    // SharedModule
  ]
})
export class PagesModule { }
