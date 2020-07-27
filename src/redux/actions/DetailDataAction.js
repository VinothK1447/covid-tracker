import actionTypes from './actionTypes';
import apis from '../../config/apiConfig';
import { getData } from '../../components/models/data-model';
import store from '../Store';
import Utils from '../../utils/Utils';

export const getAllIndiaDetailedData = async (dispatch) => {
	const config = {
		url: `${apis.defaultIndiaDataUri}${apis.indiaAllDataUri}`,
	};

	const allIndiaDetailedData = await getData(config);
	let allIndiaData = Utils.appendNormalizedBasicInfo(allIndiaDetailedData);
	allIndiaData = Object.keys(allIndiaData)
		.sort(
			(a, b) =>
				allIndiaData[b].total.confirmed -
				allIndiaData[a].total.confirmed
		)
		.reduce((arr, key) => {
			arr[key] = allIndiaData[key];
			return arr;
		}, {});
	dispatch({
		type: actionTypes.GET_ALL_INDIA_DETAILED_DATA,
		payload: { data: allIndiaData, sortBy: 'confirmed', sortType: 'asc' },
	});
};

export const getUSAsDetailedData = async (dispatch) => {
	const config = {
		url: `${apis.defaultApiUri}${apis.usaStatesUri}`,
	};

	const usaDetailedData = await getData(config);
	dispatch({
		type: actionTypes.GET_USA_DETAILED_DATA,
		payload: { data: usaDetailedData, sortBy: 'cases', sortType: 'asc' },
	});
};

export const sortDataByRequest = (country, sortType, sortBy) => (dispatch) => {
	let data =
		country === 'india'
			? store.getState().detailedData.allIndiaDetailedData
			: store.getState().detailedData.usaDetailedData;

	if (country === 'india') {
		data = Object.keys(data)
			.sort((state1, state2) => {
				if (sortBy === 'stateName') {
					if (sortType === 'asc') {
						return data[state1][sortBy].localeCompare(
							data[state2][sortBy]
						);
					} else {
						return data[state2][sortBy].localeCompare(
							data[state1][sortBy]
						);
					}
				}
				if (
					sortBy === 'confirmed' ||
					sortBy === 'active' ||
					sortBy === 'recovered' ||
					sortBy === 'deceased'
				) {
					if (sortType === 'asc') {
						return (
							data[state1].total[sortBy] -
							data[state2].total[sortBy]
						);
					} else {
						return (
							data[state2].total[sortBy] -
							data[state1].total[sortBy]
						);
					}
				}
				return false;
			})
			.reduce((arr, key) => {
				arr[key] = data[key];
				return arr;
			}, {});
	}

	if (country === 'usa') {
		data = data.sort((state1, state2) => {
			if (sortBy === 'state') {
				if (sortType === 'asc') {
					return state1[sortBy].localeCompare(state2[sortBy]);
				} else {
					return state2[sortBy].localeCompare(state1[sortBy]);
				}
			}
			if (
				sortBy === 'cases' ||
				sortBy === 'deaths' ||
				sortBy === 'tests'
			) {
				if (sortType === 'asc') {
					return state1[sortBy] - state2[sortBy];
				} else {
					return state2[sortBy] - state1[sortBy];
				}
			}
			return false;
		});
	}
	dispatch({
		type: actionTypes.SORT_DATA_BY_REQUEST,
		payload: {
			data: data,
			country: country,
			sortBy: sortBy,
			sortType: sortType,
		},
	});
};
