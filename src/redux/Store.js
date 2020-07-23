import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import countries from './reducers/CountriesReducer';
import apiDataList from './reducers/OverallDataReducer';
import detailedData from './reducers/DetailDataReducer';

const middleware = [thunk];
const initialState = {};
const reducers = combineReducers({ apiDataList, countries, detailedData });

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