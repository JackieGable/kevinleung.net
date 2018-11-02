import { Component, OnInit } from '@angular/core';
import { Dropdown, Tooltip } from 'materialize-css';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toTop() {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }

  toSection(section: string) {
    document.getElementsByClassName(section)[0].scrollIntoView({ behavior: 'smooth' });
  }

}
