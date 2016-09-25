import { UiActions } from '../actions/ui.actions';
import { AmcDataActions } from '../actions/amc-data.actions';

export interface IUiState {
    isPanelMinimized: boolean,
    panelPosition: {
        x: number,
        y: number
    },
    selectedAccountId: string,
    isFetchingAmcData: boolean     
};

const initialState = {
    isPanelMinimized: false,
    panelPosition: { x: 200, y: 200 },
    selectedAccountId: null,
    isFetchingAmcData: false
}

export function uiReducer(state:IUiState = initialState, action) {
    switch(action.type) {
        case UiActions.TOGGLE_MINIMIZED:
            return Object.assign({}, state, { isPanelMinimized: !state.isPanelMinimized });
            // return state.set('isPanelMinimized', !state.isPanelMinimized);

        case UiActions.SELECT_TICKET:
            return Object.assign({}, state, { selectedAccountId: action.payload });

        case AmcDataActions.AMC_DATA_REQUESTED:
            return Object.assign({}, state, { isFetchingAmcData: true });

        case AmcDataActions.AMC_DATA_RECEIVED:
            return Object.assign({}, state, { isFetchingAmcData: false });

        default:
        return state;
    }
}

// import { Immutable } from 'seamless-immutable';

// const initialState = Immutable({
//     isPanelMinimized: false,
//     panelPosition: { x: 200, y: 200 },
//     selectedAccountId: null,
//     isFetchingAmcData: false
// });

// export function uiReducer(state:Immutable<IUiState> = initialState, action) {
//     switch(action.type) {
//         case UiActions.TOGGLE_MINIMIZED:
//             return state.set('isPanelMinimized', !state.isPanelMinimized));
//             // return state.set('isPanelMinimized', !state.isPanelMinimized);

//         case AmcDataActions.AMC_DATA_REQUESTED:
//             return state.set('isFetchingAmcData', true);

//         case AmcDataActions.AMC_DATA_RECEIVED:
//             return state.set('isFetchingAmcData', false);

//         default:
//         return state;
//     }
// }
