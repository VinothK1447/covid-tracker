import React from 'react';
import Card from '../../hoc/Card';
import Utils from '../../../utils/Utils';

function CountIndicator(props) {
	var { confirmed, deaths, recovered, lastUpdate } = props.countryData;
	return (
		<div>
			{lastUpdate ? Utils.formatDate(new Date(lastUpdate)) : ''}
			{confirmed ? (
				<Card
					key={confirmed.detail}
					cardKey={'Confirmed'}
					cardValue={confirmed.value}
				/>
			) : (
				''
			)}
			{recovered ? (
				<Card
					key={recovered.detail}
					cardKey={'Recovered'}
					cardValue={recovered.value}
				/>
			) : (
				''
			)}
			{deaths ? (
				<Card
					key={deaths.detail}
					cardKey={'Deaths'}
					cardValue={deaths.value}
				/>
			) : (
				''
			)}
		</div>
	);
}

export default CountIndicator;
