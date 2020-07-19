import actionTypes from './actionTypes';
import apis from '../../config/apiConfig';
import { getData } from '../../components/models/data-model';

export const getDefaultCountry = async (dispatch) => {
	const config = {
		url: apis.defaultCountryUri,
	};
	const userCountry = await getData(config);
	dispatch({
		type: actionTypes.UPDATE_DEFAULT_COUNTRY,
		payload: userCountry.country,
	});
};

export const getOverallData = async (dispatch) => {
	const config = {
		url: `${apis.defaultApiUri}${apis.globalUri}`,
	};
	const overallData = await getData(config);
	dispatch({
		type: actionTypes.GET_OVERALL_DATA,
		payload: overallData,
	});
};
