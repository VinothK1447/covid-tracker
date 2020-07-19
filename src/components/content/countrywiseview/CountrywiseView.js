import React from 'react';

function CountrywiseView(props) {
	const countryDetail =
		props && props.countryData ? props.countryData[0] : null;
	const countryDetailTbl = Object.keys(countryDetail).map((key) => {
		console.log(key, countryDetail[key]);
		return false;
	});
	return <div>{countryDetailTbl}</div>;
}

export default CountrywiseView;
