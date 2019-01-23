import { SnackbarService } from './services/snackbar.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Modules */
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';

/** UI Components */
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ToastComponent } from './components/toast/toast/toast.component';

const components = [
  SpinnerComponent,
  ToastComponent,
];

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatSnackBarModule
  ],
  declarations: [...components],
  exports: [...components ],
  entryComponents: [
    ToastComponent,
  ],
  providers: [
    SnackbarService,
  ]
})
export class UIModule { }
