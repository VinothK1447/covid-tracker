import actionTypes from '../actions/actionTypes';

const initialState = {
	overallData: {},
};
export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_OVERALL_DATA:
			return { ...state, overallData: action.payload };
		default:
			return state;
	}
};
