import React from 'react';
import './Card.scss';

const Card = (props) => {
	return (
		<div className='card-container' key={props.cardKey}>
			<div className='card-items'>
				<div>{props.cardKey}</div>
				<div>{props.cardValue}</div>
			</div>
		</div>
	);
};

export default Card;
