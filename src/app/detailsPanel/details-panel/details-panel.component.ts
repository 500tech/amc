import { Component, OnInit } from '@angular/core';
import { IRootState } from '../../reducers';
import { NgRedux } from 'ng2-redux';

@Component({
  selector: 'amc-details-panel',
  templateUrl: './details-panel.component.html',
  styleUrls: ['./details-panel.component.css']
})
export class DetailsPanelComponent {
  notifications = []; // TODO: use notification interface

  constructor(private ngRedux: NgRedux<IRootState>) {
    ngRedux.connect(this.mapStateToThis, null)(this);
  }
  
  mapStateToThis(state:IRootState) {
    let notifications = null;

    if (state.ui.selectedAccountId) {
      notifications = state.amcData.Notifications
        .filter((notification) => notification.TraderAccountId === parseInt(state.ui.selectedAccountId)); 
    }

    return {
      notifications,
      isPanelDisplayed: !state.ui.isPanelMinimized && notifications
    };
  }
}
