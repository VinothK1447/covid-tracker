import actionTypes from '../actions/actionTypes';

const initialState = {
	allIndiaDetailedData: {},
	usaDetailedData: [],
	sortBy: '',
	sortType: '',
};
export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_ALL_INDIA_DETAILED_DATA:
			return {
				...state,
				allIndiaDetailedData: action.payload.data,
				sortBy: action.payload.sortBy,
				sortType: action.payload.sortType,
			};
		case actionTypes.GET_USA_DETAILED_DATA:
			return {
				...state,
				usaDetailedData: action.payload.data,
				sortBy: action.payload.sortBy,
				sortType: action.payload.sortType,
			};
		case actionTypes.SORT_DATA_BY_REQUEST:
			if (action.payload.country === 'india') {
				return {
					...state,
					allIndiaDetailedData: action.payload.data,
					sortBy: action.payload.sortBy,
					sortType: action.payload.sortType,
				};
			}
			if (action.payload.country === 'usa') {
				return {
					...state,
					usaDetailedData: action.payload.data,
					sortBy: action.payload.sortBy,
					sortType: action.payload.sortType,
				};
			}
		default:
			return state;
	}
};
