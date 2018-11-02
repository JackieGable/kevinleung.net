import { Component, OnInit } from '@angular/core';
import { Parallax, Tooltip, Materialbox, Slider, Collapsible, Dropdown } from 'materialize-css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  ngOnInit() {
    document.addEventListener('DOMContentLoaded', function () {
      Dropdown.init(document.querySelectorAll('.dropdown-trigger'));
      Parallax.init(document.querySelectorAll('.parallax'));
      Tooltip.init(document.querySelectorAll('.tooltipped'));
      Materialbox.init(document.querySelectorAll('.materialboxed'));
      Slider.init(document.querySelectorAll('.slider'));
      Collapsible.init(document.querySelectorAll('.collapsible'));
    });
  }
}
