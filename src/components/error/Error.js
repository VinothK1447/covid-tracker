import React from 'react';
import Header from '../header/Header';
import strings from '../../config/strings';

function Error() {
	return (
		<>
			<Header />
			<div className='error-page'>
				<div className='error-anim'>
					<div className='error-text'>404</div>
				</div>
				<div className='error-text-2'>{strings.en.notFound}</div>
			</div>
			<div className='error-back-btn'>
				<a href='/'>{strings.en.goHome}</a>
			</div>
		</>
	);
}

export default Error;
