import React, { Component } from 'react';
import Header from '../header/Header';
import Content from '../content/Content';
import Footer from '../footer/Footer';
import Navbar from '../hoc/Navbar';

class Home extends Component {
	render() {
		return (
			<>
				<Header />
				<Navbar pageName='home' />
				<Content />
				<Footer />
			</>
		);
	}
}

export default Home;
