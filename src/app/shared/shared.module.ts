import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';
import { RigthSidebarComponent } from './rigth-sidebar/rigth-sidebar.component';
import { ComponentsModule } from '../components/components.module';
import { DirectiveModule } from '../directives/directive.module';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    PagenofoundComponent,
    LoadingComponent,
    RigthSidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    DirectiveModule
  ],
  exports:[
    NavbarComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    PagenofoundComponent,
    LoadingComponent,
    RigthSidebarComponent
  ]
})
export class SharedModule { }
