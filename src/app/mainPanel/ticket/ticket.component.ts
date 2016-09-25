import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'amc-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketComponent {

  @Input() ticket;

  constructor() { }
}
