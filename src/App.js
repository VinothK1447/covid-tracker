import React, { lazy, Suspense } from 'react';

import { Provider } from 'react-redux';
import store from './redux/Store.js';
import { Switch, Route } from 'react-router-dom';

import './styles/App.scss';
const Home = lazy(() => import('./components/home/Home.js'));
const DetailsIndia = lazy(() => import('./components/details/DetailsIndia'));
const DetailsUsa = lazy(() => import('./components/details/DetailsUsa.js'));
const Vaccines = lazy(() => import('./components/vaccines/Vaccines.js'));
const Error = lazy(() => import('./components/error/Error'));

function App() {
	return (
		<Provider store={store}>
			<div className='App'>
				<Suspense fallback={renderLoader()}>
					<Switch>
						<Route path='/' exact component={Home} />
						<Route path='/detailsIndia' component={DetailsIndia} />
						<Route path='/detailsUsa' component={DetailsUsa} />
						<Route path='/vaccines' component={Vaccines} />
						<Route component={Error} />
					</Switch>
				</Suspense>
			</div>
		</Provider>
	);
}

const renderLoader = () => {
	return (
		<div className='loader'>
			<div className='loader-img'>&nbsp;</div>
		</div>
	);
};

export default App;
