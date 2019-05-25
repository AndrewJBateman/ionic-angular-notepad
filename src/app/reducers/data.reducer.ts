import * as fromData from '../actions/data.actions';

// define structure of DataSate to include items property for loaded data..
export interface DataState {
	items: String[];
	loading: boolean;
	error: any;
}

export const initialState: DataState = {
	items: [],
	loading: false,
	error: null
};

export function reducer(
	state = initialState,
	action: fromData.ActionsUnion
): DataState {
	switch (action.type) {
		case fromData.ActionTypes.LoadDataBegin: {
			return {
				...state,
				loading: true,
				error: null
			};
		}

		case fromData.ActionTypes.LoadDataSuccess: {
			return {
				...state,
				loading: false,
				items: action.payload.data
			};
		}

		case fromData.ActionTypes.LoadDataFailure: {
			return {
				...state,
				loading: false,
				error: action.payload.error
			};
		}

		default: {
			return state;
		}
	}
}

export const getItems = (state: DataState) => state.items;
