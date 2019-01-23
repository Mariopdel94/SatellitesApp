import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wrapper-footer',
  templateUrl: './wrapper-footer.component.html',
  styleUrls: ['./wrapper-footer.component.scss']
})
export class WrapperFooterComponent implements OnInit {

  constructor(
    private _router: Router,
  ) { }

  ngOnInit() {
  }

  public navigateTo(url: string) {
    this._router.navigate(['/' + url]);
  }

}
