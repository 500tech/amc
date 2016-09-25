import { AmcDataActions } from '../actions/amc-data.actions';

// TODO: define state interface
export interface IAmcDataState {
    Notifications: any,
    Parameters: any
    UserDetails: any
}

const initialState:IAmcDataState = {
	Notifications: [],
	Parameters: {},
	UserDetails: {}
};

export function amcDataReducer(state = initialState, action) {
	switch(action.type) {
		case AmcDataActions.AMC_DATA_RECEIVED:
			return action.payload;

		default:
	    	return state;
	}
}


// import { Immutable } from 'seamless-immutable';


// const initialState:IAmcDataState = Immutable({
// 	Notifications: [],
// 	Parameters: {},
// 	UserDetails: {}
// });

// export function amcDataReducer(state = initialState, action) {
// 	switch(action.type) {
// 		case AmcDataActions.AMC_DATA_RECEIVED:
// 			return Immutable(action.payload);

// 		default:
// 	    	return state;
// 	}
// }
