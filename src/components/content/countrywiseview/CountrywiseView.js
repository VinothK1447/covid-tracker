import React from 'react';
import DetailedCard from '../../hoc/DetailedCard';

function CountrywiseView(props) {
	const countryDetail =
		props && props.countryData ? props.countryData[0] : null;
	const countryDetailElem = Object.keys(countryDetail).map((key) => {
		if (key.toLowerCase() === 'cases') {
			return (
				<DetailedCard
					key='detailed-card-cases'
					cardKey={key}
					allData={countryDetail}
					keysOnCard={[
						'cases',
						'casesPerOneMillion',
						'todayCases',
						'oneCasePerPeople',
					]}
				/>
			);
		}
		if (key.toLowerCase() === 'deaths') {
			return (
				<DetailedCard
					key='detailed-card-deaths'
					cardKey={key}
					allData={countryDetail}
					keysOnCard={[
						'deaths',
						'deathsPerOneMillion',
						'todayDeaths',
						'oneDeathPerPeople',
					]}
				/>
			);
		}
		if (key.toLowerCase() === 'recovered') {
			return (
				<DetailedCard
					key='detailed-card-recovered'
					cardKey={key}
					allData={countryDetail}
					keysOnCard={[
						'recovered',
						'recoveredPerOneMillion',
						'todayRecovered',
					]}
				/>
			);
		}
		if (key.toLowerCase() === 'active') {
			return (
				<DetailedCard
					key='detailed-card-active'
					cardKey={key}
					allData={countryDetail}
					keysOnCard={[
						'active',
						'activePerOneMillion',
						'critical',
						'criticalPerOneMillion',
					]}
				/>
			);
		}
		if (key.toLowerCase() === 'updated') {
			return (
				<DetailedCard
					key='detailed-card-generic'
					cardKey={key}
					allData={countryDetail}
					keysOnCard={[
						'country',
						'continent',
						'population',
						'countryInfo',
						'testsPerOneMillion',
						'tests',
						'oneTestPerPeople',
					]}
				/>
			);
		}
		return false;
	});
	return <div className='detail-card-container'>{countryDetailElem}</div>;
}

export default CountrywiseView;
