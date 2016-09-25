import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IRootState } from '../reducers';

@Injectable()
export class UiActions {
    constructor(private ngRedux:NgRedux<IRootState>) {       
    }

    static TOGGLE_MINIMIZED:string = 'TOGGLE_MINIMIZED';
    static MOVE_PANEL:string = 'MOVE_PANEL';
    static SELECT_TICKET:string = 'SELECT_TICKET';

    toggleMinimized() {
        this.ngRedux.dispatch({ type: UiActions.TOGGLE_MINIMIZED });
    }

    selectTicket(accountId) {
        this.ngRedux.dispatch({ type: UiActions.SELECT_TICKET, payload: accountId });
    }
}
