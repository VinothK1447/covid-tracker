import actionTypes from '../actions/actionTypes';

const initialState = {
	selectedCountry: '',
	allCountries: [],
	countrywiseData: {},
	drilledCountryData: [],
};
export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_ALL_COUNTRIES:
			return { ...state, allCountries: action.payload };
		case actionTypes.UPDATE_SELECTED_COUNTRY:
			return { ...state, selectedCountry: action.payload };
		case actionTypes.UPDATE_COUNTRYWISE_DATA:
			return { ...state, countrywiseData: action.payload };
		case actionTypes.UPDATE_DRILLED_COUNTRY_DATA:
			return { ...state, drilledCountryData: action.payload };
		default:
			return state;
	}
};
