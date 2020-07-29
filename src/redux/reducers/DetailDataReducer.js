import actionTypes from '../actions/actionTypes';

const initialState = {
	allIndiaDetailedData: {},
	selectedState: {},
	usaDetailedData: [],
	usaStateCountiesData: {},
	selectedStateCounties: [],
	sortBy: '',
	sortType: '',
	chSortType: '',
	chSortBy: '',
};
export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_ALL_INDIA_DETAILED_DATA:
			return {
				...state,
				allIndiaDetailedData: action.payload.data,
				sortBy: action.payload.sortBy,
				sortType: action.payload.sortType,
				chSortBy: action.payload.chSortBy,
				chSortType: action.payload.chSortType,
			};
		case actionTypes.UPDATE_SELECTED_INDIAN_STATE:
		case actionTypes.UPDATE_SELECTED_US_STATE:
			return {
				...state,
				selectedState: action.payload.data,
				chSortBy: action.payload.chSortBy,
				chSortType: action.payload.chSortType,
			};
		case actionTypes.GET_USA_DETAILED_DATA:
			return {
				...state,
				usaDetailedData: action.payload.data,
				sortBy: action.payload.sortBy,
				sortType: action.payload.sortType,
			};
		case actionTypes.GET_US_STATE_COUNTY_DATA:
			return {
				...state,
				usaStateCountiesData: action.payload,
			};
		case actionTypes.UPDATE_SELECTED_STATE_COUNTY_DATA:
			return {
				...state,
				selectedStateCounties: action.payload.data,
				chSortBy: action.payload.chSortBy,
				chSortType: action.payload.chSortType,
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
			break;
		case actionTypes.SORT_CHDATA_BY_REQUEST:
			return {
				...state,
				selectedState: action.payload.data,
				chSortBy: action.payload.chSortBy,
				chSortType: action.payload.chSortType,
			};
		default:
			return state;
	}
};
