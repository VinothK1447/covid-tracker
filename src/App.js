import React from 'react';

import { Provider } from 'react-redux';
import store from './redux/Store.js';
import { Switch, Route } from 'react-router-dom';

import './styles/App.scss';
import Home from './components/home/Home.js';
import DetailsIndia from './components/details/DetailsIndia';
import DetailsUsa from './components/details/DetailsUsa.js';
import Vaccines from './components/vaccines/Vaccines.js';
import Error from './components/error/Error';

function App() {
	return (
		<Provider store={store}>
			<div className='App'>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/detailsIndia' component={DetailsIndia} />
					<Route path='/detailsUsa' component={DetailsUsa} />
					<Route path='/vaccines' component={Vaccines} />
					<Route component={Error} />
				</Switch>
			</div>
		</Provider>
	);
}

export default App;
