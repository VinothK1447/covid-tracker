import React from 'react';
import CountUp from 'react-countup';
import strings from '../../config/strings';

const DetailedCard = (props) => {
	let cardStyle = 'detail-card ';
	let dataToDisplay;
	if (props.cardKey.toLowerCase() === 'cases') {
		cardStyle += 'detail-card-cases';
	}
	if (props.cardKey.toLowerCase() === 'recovered') {
		cardStyle += 'detail-card-recovered';
	}
	if (props.cardKey.toLowerCase() === 'active') {
		cardStyle += 'detail-card-active';
	}
	if (props.cardKey.toLowerCase() === 'deaths') {
		cardStyle += 'detail-card-deaths';
	}
	dataToDisplay = props.keysOnCard.map((key) => (
		<div key={key}>
			<div className='detail-card-header'>{strings.en[key]}</div>
			<div className='detail-card-counters'>
				<CountUp
					start={0}
					end={parseInt(props.allData[key], 10)}
					separator=','
				/>
			</div>
		</div>
	));
	if (props.cardKey.toLowerCase() === 'updated') {
		cardStyle += 'detail-card-generic';
		const {
			country,
			continent,
			population,
			testsPerOneMillion,
			tests,
			oneTestPerPeople,
		} = props.allData;
		const { flag, iso2 } = props.allData.countryInfo;

		dataToDisplay = (
			<div key='detailed-generic-section'>
				<div className='detail-card-header'>
					{strings.en['continent']}
				</div>
				<div className='detail-card-counters'>{continent}</div>
				<div className='detail-card-header'>
					{strings.en['country']}
				</div>
				<div className='detail-card-counters'>
					<img src={flag} alt={iso2} height='20' width='20' />{' '}
					{country}
				</div>
				<div className='detail-card-header'>
					{strings.en['population']}
				</div>
				<div className='detail-card-counters'>
					<CountUp start={0} end={population} separator=',' />
				</div>
				<div className='detail-card-header'>{strings.en['tests']}</div>
				<div className='detail-card-counters'>
					<CountUp start={0} end={tests} separator=',' />
				</div>
				<div className='detail-card-header'>
					{strings.en['testsPerOneMillion']}
				</div>
				<div className='detail-card-counters'>
					<CountUp start={0} end={testsPerOneMillion} separator=',' />
				</div>
				<div className='detail-card-header'>
					{strings.en['oneTestPerPeople']}
				</div>
				<div className='detail-card-counters'>
					<CountUp start={0} end={oneTestPerPeople} separator=',' />
				</div>
			</div>
		);
	}
	return (
		<>
			<div className={cardStyle}>{dataToDisplay}</div>
		</>
	);
};

export default DetailedCard;
