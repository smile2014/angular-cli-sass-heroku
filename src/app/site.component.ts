import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './components/header/';

@Component({
  moduleId: module.id,
  selector: 'site',
  templateUrl: 'site.component.html',
  styleUrls: ['site.component.css'],
  directives: [HeaderComponent]
})
export class SiteComponent implements OnInit {

  constructor() {}

  ngOnInit() {

  }

}
