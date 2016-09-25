import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IRootState } from '../reducers';
import { ServerApi } from '../services/server-api.service'

@Injectable()
export class AmcDataActions {
    constructor(private ngRedux:NgRedux<IRootState>, private serverApi:ServerApi) {
    }

    static AMC_DATA_REQUESTED:string = 'AMC_DATA_REQUESTED';
    static AMC_DATA_RECEIVED:string = 'AMC_DATA_RECEIVED';
    static AMC_DATA_ERROR:string = 'AMC_DATA_ERROR';

    getAmcData() {
        this.ngRedux.dispatch({ type: AmcDataActions.AMC_DATA_REQUESTED });

        // ajax call
        this.serverApi.getAmcData().subscribe((amcData) => {
           // success
           this.ngRedux.dispatch({ type: AmcDataActions.AMC_DATA_RECEIVED, payload: amcData });
        });
    }
}
