import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { UIModule } from './_core/modules/ui/ui.module';

import { WrapperComponent } from './wrapper/wrapper.component';
import { WrapperFooterComponent } from './wrapper/components/wrapper-footer/wrapper-footer.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio',  loadChildren: './home/home.module#HomeModule' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    UIModule,
    HttpClientModule,
  ],
  declarations: [
    WrapperComponent,
    WrapperFooterComponent,
  ],
  providers: [],
  bootstrap: [ WrapperComponent ],
})
export class AppModule { }
