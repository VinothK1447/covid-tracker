import React from 'react';
import CountUp from 'react-countup';

const Card = (props) => {
	let cardStyle = 'card-items ';
	if (props.cardKey.toLowerCase() === 'cases') {
		cardStyle += 'card-cases';
	}
	if (props.cardKey.toLowerCase() === 'recovered') {
		cardStyle += 'card-recovered';
	}
	if (props.cardKey.toLowerCase() === 'active') {
		cardStyle += 'card-active';
	}
	if (props.cardKey.toLowerCase() === 'deaths') {
		cardStyle += 'card-deaths';
	}
	return (
		<>
			<div className={cardStyle}>
				<div className='card-status-text'>{props.cardKey}</div>
				<div className='card-counter'>
					<CountUp start={0} end={props.cardValue} separator=',' />
				</div>
				{props.cardSubKey ? (
					<div>
						<div>{props.cardSubKey}</div>
						<div>
							<CountUp
								start={0}
								end={props.cardSubValue}
								separator=','
							/>
						</div>
					</div>
				) : (
					''
				)}
			</div>
		</>
	);
};

export default Card;
