import React from 'react';
import Card from '../../hoc/Card';

function DrilledDownView(props) {
	const drilledDownData = props.drilledCountryData;

	const detailedView = drilledDownData.length ? (
		drilledDownData.map((unit) => (
			<details key={unit.uid}>
				<summary>{unit.combinedKey}</summary>
				<Card cardKey={'Confirmed'} cardValue={unit.confirmed} />
				<Card cardKey={'Active'} cardValue={unit.active} />
				<Card cardKey={'Recovered'} cardValue={unit.recovered} />
				<Card cardKey={'Deceased'} cardValue={unit.deaths} />
			</details>
		))
	) : (
		<></>
	);

	return <>{detailedView}</>;
}

export default DrilledDownView;
