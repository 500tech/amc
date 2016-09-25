// import { combineReducers } from 'redux-seamless-immutable';
import { combineReducers } from 'redux'

import { amcDataReducer, IAmcDataState } from './amc-data.reducer';
import { uiReducer, IUiState } from './ui.reducer';

export interface IRootState {
    amcData: IAmcDataState
    ui: IUiState
}

export const rootReducer = combineReducers({
    amcData: amcDataReducer,
    ui: uiReducer
});
