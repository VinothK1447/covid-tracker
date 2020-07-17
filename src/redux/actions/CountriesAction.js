import actionTypes from './actionTypes';
import apis from '../../config/apiConfig';
import { getData } from '../../components/models/data-model';

export const getAllCountries = async (dispatch) => {
	const config = {
		url: `${apis.defaultApiUri}${apis.allCountriesUri}`,
	};
	let countries = await getData(config);
	dispatch({
		type: actionTypes.GET_ALL_COUNTRIES,
		payload: countries.countries,
	});
};

export const updateSelectedCountry = (e) => async (dispatch) => {
	dispatch({
		type: actionTypes.UPDATE_SELECTED_COUNTRY,
		payload: e,
	});
	const config = {
		url: `${apis.defaultApiUri}${apis.allCountriesUri}/${e}`,
	};
	let countrywiseData = await getData(config);
	dispatch({
		type: actionTypes.UPDATE_COUNTRYWISE_DATA,
		payload: countrywiseData,
	});
	const configDrill = {
		url: `${apis.defaultApiUri}${apis.allCountriesUri}/${e}${apis.confirmedUri}`,
	};
	const drilledCountryData = await getData(configDrill);
	dispatch({
		type: actionTypes.UPDATE_DRILLED_COUNTRY_DATA,
		payload: drilledCountryData,
	});
};
