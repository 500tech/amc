import { Component, Input } from '@angular/core';

@Component({
  selector: 'amc-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {

  @Input() ticket;

  constructor() { }
}
