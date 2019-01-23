import { Subject } from 'rxjs/Subject';
import { ToastComponent } from './../components/toast/toast/toast.component';
import { MatSnackBar, MatSnackBarRef } from '@angular/material';
import { Injectable, OnDestroy } from '@angular/core';

export type SnackbarType = 'default' | 'warning';

interface SnackbarOptions {
  message: string;
  panelClass?: string;
  type?: SnackbarType;
}

@Injectable({
  providedIn: 'root'
})
export class SnackbarService implements OnDestroy {
  private _minDuration = 3000;
  private _destroyed$ = new Subject();

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  public ngOnDestroy() {
    this._destroyed$.next(true);
    this._destroyed$.complete();
  }

  public openSnackBar(options: SnackbarOptions): MatSnackBarRef<ToastComponent> {
    const snackbar = this._snackBar.openFromComponent(ToastComponent, {
      data: {
        message: options.message,
        type: (options && options.type) ? options.type : 'default',
        panelClass: (options && options.panelClass) ? options.panelClass : '',
      },
      panelClass: (options && options.panelClass) ? options.panelClass : '',
      duration: options.message.length * 60 > this._minDuration ? options.message.length * 60 : this._minDuration,
    });

    snackbar.instance.closeClicked$
    .takeUntil(this._destroyed$)
    .subscribe(() => {
      snackbar.dismiss();
    });

    return snackbar;
  }
}
