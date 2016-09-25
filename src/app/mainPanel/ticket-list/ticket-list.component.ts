import { Component, OnInit } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IRootState } from '../../reducers';
import { UiActions } from '../../actions/ui.actions';

@Component({
  selector: 'amc-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent {
  ticketList = []; // TODO: use ticket interface

  constructor(private ngRedux: NgRedux<IRootState>, private uiActions: UiActions) {
    ngRedux.connect(this.mapStateToThis, null)(this);
  }
  
  mapStateToThis(state:IRootState) {
    const userDetails = state.amcData.UserDetails;
    const ticketList = Object.keys(userDetails).map((accountId) => {
      return Object.assign({}, userDetails[accountId], {accountId});
    })

    return {
      ticketList
    };
  }
}
