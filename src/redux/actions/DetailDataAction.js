import actionTypes from './actionTypes';
import apis from '../../config/apiConfig';
import { getData } from '../../components/models/data-model';
import Utils from '../../utils/Utils';

export const getAllIndiaDetailedData = async (dispatch) => {
	const config = {
		url: `${apis.defaultIndiaDataUri}${apis.indiaAllDataUri}`,
	};

	const allIndiaDetailedData = await getData(config);
	const allIndiaData = Utils.appendNormalizedBasicInfo(allIndiaDetailedData);
	dispatch({
		type: actionTypes.GET_ALL_INDIA_DETAILED_DATA,
		payload: allIndiaData,
	});
};

export const getUSAsDetailedData = async (dispatch) => {
	const config = {
		url: `${apis.defaultApiUri}${apis.usaStatesUri}`,
	};

	const usaDetailedData = await getData(config);
	dispatch({
		type: actionTypes.GET_USA_DETAILED_DATA,
		payload: usaDetailedData,
	});
};
