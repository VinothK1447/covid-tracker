import React from 'react';

import { Provider } from 'react-redux';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import store from './redux/Store.js';

import './styles/App.scss';

function App() {
	return (
		<Provider store={store}>
			<div className='App'>
				<Header />
				<Content />
				<Footer />
			</div>
		</Provider>
	);
}

export default App;
