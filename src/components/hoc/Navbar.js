import React from 'react';
import menuConfig from '../../config/menuConfig';
import { Link } from 'react-router-dom';

function Navbar(props) {
	const navMenus =
		props && props.pageName ? (
			<div className='nav-bar'>
				<div className='nav-bar-left'>
					<Link to={menuConfig[props.pageName].left.link}>
						{' '}
						{menuConfig[props.pageName].left.text}{' '}
					</Link>
				</div>
				<div className='nav-bar-right'>
					<Link to={menuConfig[props.pageName].right.link}>
						{' '}
						{menuConfig[props.pageName].right.text}{' '}
					</Link>
				</div>
			</div>
		) : (
			''
		);
	return <>{navMenus}</>;
}

export default Navbar;
