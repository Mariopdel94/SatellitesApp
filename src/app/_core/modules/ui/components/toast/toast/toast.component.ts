import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
  public type: string;
  public message: string;
  public acceptLabel: string;
  public panelClass: string;

  public closeClicked$: Subject<boolean> = new Subject();
  public actionTrigger$: Subject<boolean> = new Subject();

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
  ) {
    this.message = this.data.message || '';
    this.type = this.data.type || 'default';
    this.acceptLabel = this.data.acceptLabel || '';
    this.panelClass = this.data.panelClass || '';
  }

  ngOnInit() { }

  public triggerClose(): void {
    this.closeClicked$.next(true);
  }

  public triggerAction(): void {
    this.actionTrigger$.next(true);
  }

}

