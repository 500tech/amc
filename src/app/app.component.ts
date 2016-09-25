import { Component, OnInit } from '@angular/core';
import { AmcDataActions } from './actions/amc-data.actions';

@Component({
  selector: 'amc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private amcDataActions:AmcDataActions) {
  }

  ngOnInit() {
    this.amcDataActions.getAmcData();
  }
}
