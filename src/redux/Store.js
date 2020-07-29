import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import countries from './reducers/CountriesReducer';
import apiDataList from './reducers/OverallDataReducer';
import detailedData from './reducers/DetailDataReducer';
import vaccinesData from './reducers/VaccineReducer';

const middleware = [thunk];
const initialState = {};
const reducers = combineReducers({
	apiDataList,
	countries,
	detailedData,
	vaccinesData,
});

const store = createStore(
	reducers,
	initialState,
	compose(
		applyMiddleware(...middleware),
		...(window.__REDUX_DEVTOOLS_EXTENSION__
			? [window.__REDUX_DEVTOOLS_EXTENSION__()]
			: [])
	)
);

export default store;
