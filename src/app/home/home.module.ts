import { UIModule } from './../_core/modules/ui/ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    UIModule,
    NgSelectModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
