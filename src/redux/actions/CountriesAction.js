import actionTypes from './actionTypes';
import apis from '../../config/apiConfig';
import { getData } from '../../components/models/data-model';
import Utils from '../../utils/Utils';

export const getAllCountriesData = async (dispatch) => {
	const config = {
		url: `${apis.defaultApiUri}${apis.countriesUri}`,
	};
	let countries = await getData(config);
	let allCountries = Utils.extractCountriesInfo(countries);

	dispatch({
		type: actionTypes.GET_ALL_COUNTRIES,
		payload: allCountries,
	});
	dispatch({
		type: actionTypes.GET_ALL_COUNTRIES_DATA,
		payload: countries,
	});
};

export const updateSelectedCountry = (e) => async (dispatch) => {
	dispatch({
		type: actionTypes.UPDATE_SELECTED_COUNTRY,
		payload: e,
	});
};

export const updateSelectedCountryData = (e) => (dispatch) => {
	dispatch({
		type: actionTypes.UPDATE_COUNTRYWISE_DATA,
		payload: e,
	});
};
