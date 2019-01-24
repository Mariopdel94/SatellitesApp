import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wrapper-header',
  templateUrl: './wrapper-header.component.html',
  styleUrls: ['./wrapper-header.component.scss']
})
export class WrapperHeaderComponent implements OnInit {
  public isMenuVisible = false;

  constructor(
    private _router: Router,
  ) { }

  ngOnInit() {
  }

  public navigateTo(url: string) {
    this._router.navigate(['/' + url]);
  }

  public isActive(url: string): boolean {
    return this._router.url.includes(url);
  }

  public toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

}
