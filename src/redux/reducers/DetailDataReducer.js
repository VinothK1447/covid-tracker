import actionTypes from '../actions/actionTypes';

const initialState = {
	allIndiaDetailedData: {},
	usaDetailedData: [],
};
export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_ALL_INDIA_DETAILED_DATA:
			return { ...state, allIndiaDetailedData: action.payload };
		case actionTypes.GET_USA_DETAILED_DATA:
			return { ...state, usaDetailedData: action.payload };
		default:
			return state;
	}
};
