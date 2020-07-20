import React, { Component } from 'react';

class TypeAheadSelect extends Component {
	constructor(props) {
		super(props);

		this.state = {
			filteredCountries: [],
		};
		this.selectOnTypeRef = React.createRef();
		this.listingRef = React.createRef();
	}

	filterCountries = (e) => {
		let filteredSuggestions;
		let val = e.target.value;
		if (val.length >= 3) {
			filteredSuggestions = this.props.allCountries.filter((country) => {
				return (
					country.country.toLowerCase().indexOf(val.toLowerCase()) >
					-1
				);
			});
			this.setState({ filteredCountries: filteredSuggestions });
		}
		if (val.length < 3) {
			this.setState({ filteredCountries: [] });
		}
	};

	updateCountrySelection = (e) => {
		let dataValue = JSON.parse(e.target.dataset.value);
		this.selectOnTypeRef.current.value = dataValue.country;
		this.props.getSelectedCountry(e, dataValue.country);
		this.setState({ filteredCountries: [] });
	};

	render() {
		let suggestionList;
		if (this.state.filteredCountries.length > 0) {
			suggestionList = (
				<ul className='typeahead-list' ref={this.listingRef}>
					{this.state.filteredCountries.map((country) => {
						return (
							<li
								key={country.countryInfo.iso3}
								className='typeahead-list-item'
								data-value={JSON.stringify(country)}
								onClick={this.updateCountrySelection}
							>
								<img
									src={country.countryInfo.flag}
									height='15'
									width='15'
									alt={country.countryInfo.iso2}
								/>{' '}
								{country.country} ({country.countryInfo.iso3})
							</li>
						);
					})}
				</ul>
			);
		}
		return (
			<>
				<div className='typeahead-container'>
					<input
						type='text'
						name='selectOnType'
						ref={this.selectOnTypeRef}
						autoComplete='off'
						placeholder='Type country name to filter....'
						className='typeahead-input'
						onChange={this.filterCountries}
					/>
					{suggestionList}
				</div>
			</>
		);
	}
}

export default TypeAheadSelect;
