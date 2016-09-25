import { select } from 'ng2-redux';
import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { UiActions } from '../../actions/ui.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'amc-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPanelComponent {
  @select(['ui', 'isPanelMinimized']) isPanelMinimized:Observable<boolean>;

  toggleMinimize() {
    this.uiActions.toggleMinimized();
  }

  constructor(private uiActions:UiActions) { }
}
