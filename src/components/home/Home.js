import React, { lazy, Component } from 'react';
const Header = lazy(() => import('../header/Header'));
const Content = lazy(() => import('../content/Content'));
const Footer = lazy(() => import('../footer/Footer'));
const Navbar = lazy(() => import('../hoc/Navbar'));

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
