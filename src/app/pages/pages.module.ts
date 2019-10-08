//module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//components
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule} from '@angular/router';

//Routes
import { PAGES_ROUTING } from './pages-routing.module';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../pipes/pipes.module';
import { ProfileComponent } from './profile/profile.component';
import { HomeModule } from './home/home.module';
import { TicketCreatorModule } from './ticket-creator/ticket-creator.module';

@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PAGES_ROUTING,
    ComponentsModule,
    TicketCreatorModule,
    RouterModule,
    SharedModule,
    PipesModule,
    HomeModule
  ],
  exports:[
    DashboardComponent,
    ProfileComponent,
  ]
})
export class PagesModule { }
