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
		payload: {
			data: allIndiaData,
			sortBy: 'confirmed',
			sortType: 'asc',
			chSortBy: '',
			chSortType: '',
		},
	});
};

export const updateSelectedState = (selectedState, country) => (dispatch) => {
	if (country === 'india') {
		dispatch({
			type: actionTypes.UPDATE_SELECTED_INDIAN_STATE,
			payload: {
				data: selectedState,
				sortBy: 'confirmed',
				sortType: 'asc',
				chSortBy: 'districts',
				chSortType: 'asc',
			},
		});
	}
	if (country === 'usa') {
		const stateName = selectedState.state;
		const selectedStateCounties =
			store.getState().detailedData.usaStateCountiesData[stateName] || [];

		dispatch({
			type: actionTypes.UPDATE_SELECTED_US_STATE,
			payload: {
				data: selectedState,
				sortBy: 'confirmed',
				sortType: 'asc',
				chSortBy: 'county',
				chSortType: 'asc',
			},
		});

		dispatch({
			type: actionTypes.UPDATE_SELECTED_STATE_COUNTY_DATA,
			payload: {
				data: selectedStateCounties,
				chSortBy: 'county',
				chSortType: 'asc',
			},
		});
	}
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

export const getUSAStateCountiesData = async (dispatch) => {
	const config = {
		url: `${apis.defaultApiUri}${apis.usaCountiesUri}`,
	};

	const usStateCountyData = await getData(config);
	let countiesByState = {};
	usStateCountyData.map((county) => {
		if (!countiesByState.hasOwnProperty(county.province)) {
			countiesByState[county.province] = [county];
		} else {
			countiesByState[county.province].push(county);
		}
		return countiesByState;
	});
	dispatch({
		type: actionTypes.GET_US_STATE_COUNTY_DATA,
		payload: countiesByState,
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
				sortBy === 'active' ||
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

export const sortChDataByRequest = (country, chSortType, chSortBy) => (
	dispatch
) => {
	var data;
	if (country === 'india') {
		data = store.getState().detailedData.selectedState;
		data.districts = Object.keys(data.districts)
			.sort((d1, d2) => {
				if (chSortBy === 'districts') {
					if (chSortType === 'asc') {
						return d1.localeCompare(d2);
					} else {
						return d2.localeCompare(d1);
					}
				}
				if (
					chSortBy === 'confirmed' ||
					chSortBy === 'active' ||
					chSortBy === 'recovered' ||
					chSortBy === 'deceased'
				) {
					if (chSortType === 'asc') {
						return (
							data.districts[d1].total[chSortBy] -
							data.districts[d2].total[chSortBy]
						);
					} else {
						return (
							data.districts[d2].total[chSortBy] -
							data.districts[d1].total[chSortBy]
						);
					}
				}
				return false;
			})
			.reduce((arr, key) => {
				arr[key] = data.districts[key];
				return arr;
			}, {});
		data = { ...data, districts: data.districts };
	}
	if (country === 'usa') {
		data = store.getState().detailedData.selectedStateCounties;
		data = data.sort((c1, c2) => {
			if (chSortBy === 'county') {
				if (chSortType === 'asc') {
					return c1.county.localeCompare(c2.county);
				} else {
					return c2.county.localeCompare(c1.county);
				}
			}
			if (chSortBy === 'confirmed') {
				if (chSortType === 'asc') {
					return c1.stats.confirmed - c2.stats.confirmed;
				} else {
					return c2.stats.confirmed - c1.stats.confirmed;
				}
			}
			if (chSortBy === 'deaths') {
				if (chSortType === 'asc') {
					return c1.stats.deaths - c2.stats.deaths;
				} else {
					return c2.stats.deaths - c1.stats.deaths;
				}
			}
			return false;
		});
	}
	dispatch({
		type: actionTypes.SORT_CHDATA_BY_REQUEST,
		payload: {
			data: data,
			country: country,
			chSortBy: chSortBy,
			chSortType: chSortType,
		},
	});
};
