import actionTypes from '../actions/actionTypes';

const initialState = {
	vaccinesData: {},
};
export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_VACCINES_DATA:
			return { ...state, vaccinesData: action.payload };
		default:
			return state;
	}
};
