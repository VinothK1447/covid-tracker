import actionTypes from '../actions/actionTypes';

const initialState = {
	selectedCountry: '',
	allCountries: [],
	allCountriesData: [],
	countrywiseData: {},
};
export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_ALL_COUNTRIES:
			return { ...state, allCountries: action.payload };
		case actionTypes.GET_ALL_COUNTRIES_DATA:
			return { ...state, allCountriesData: action.payload };
		case actionTypes.UPDATE_SELECTED_COUNTRY:
			return { ...state, selectedCountry: action.payload };
		case actionTypes.UPDATE_COUNTRYWISE_DATA:
			return { ...state, countrywiseData: action.payload };
		default:
			return state;
	}
};
