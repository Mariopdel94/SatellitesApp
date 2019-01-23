import { UIModule } from './../_core/modules/ui/ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    UIModule,
    NgSelectModule,
    FormsModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
