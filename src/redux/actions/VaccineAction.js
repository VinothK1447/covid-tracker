import actionTypes from './actionTypes';
import apis from '../../config/apiConfig';
import { getData } from '../../components/models/data-model';

export const getVaccinesData = async (dispatch) => {
	const config = {
		url: `${apis.defaultApiUri}${apis.vaccinesUri}`,
	};

	const vaccinesData = await getData(config);
	dispatch({
		type: actionTypes.GET_VACCINES_DATA,
		payload: vaccinesData,
	});
};
