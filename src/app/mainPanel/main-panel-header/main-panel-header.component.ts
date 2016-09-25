import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'amc-main-panel-header',
  templateUrl: './main-panel-header.component.html',
  styleUrls: ['./main-panel-header.component.css']
})
export class MainPanelHeaderComponent implements OnInit {
  @Output() onMinimize = new EventEmitter();

  constructor() { }

  minimize() {
    this.onMinimize.next();
  }

  ngOnInit() {
  }

}
