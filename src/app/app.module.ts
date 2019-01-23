import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { UIModule } from './_core/modules/ui/ui.module';

import { WrapperComponent } from './wrapper/wrapper.component';
import { WrapperFooterComponent } from './wrapper/components/wrapper-footer/wrapper-footer.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index',  loadChildren: './home/home.module#HomeModule' },
  { path: 'about',  loadChildren: './about/about.module#AboutModule' },
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
