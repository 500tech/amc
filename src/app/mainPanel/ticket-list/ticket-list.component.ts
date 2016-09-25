import { Component, ChangeDetectionStrategy } from '@angular/core';
import { select } from 'ng2-redux';
import { IRootState } from '../../reducers';
import { UiActions } from '../../actions/ui.actions';

import { getTicketList } from '../../selectors';

@Component({
  selector: 'amc-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketListComponent {
  @select(getTicketList) ticketList$; // TODO: use ticket interface

  constructor(private uiActions: UiActions) {
  }
}
