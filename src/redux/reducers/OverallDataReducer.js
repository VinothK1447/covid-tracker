import actionTypes from '../actions/actionTypes';

const initialState = {
	defaultCountry: '',
	overallData: {},
};
export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.UPDATE_DEFAULT_COUNTRY:
			return { ...state, defaultCountry: action.payload };
		case actionTypes.GET_OVERALL_DATA:
			return { ...state, overallData: action.payload };
		default:
			return state;
	}
};
