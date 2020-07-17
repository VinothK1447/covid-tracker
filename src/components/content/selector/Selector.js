import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	getAllCountries,
	updateSelectedCountry,
} from '../../../redux/actions/CountriesAction';
import CountIndicator from '../count-indicator/CountIndicator';
import DrilledDownView from '../drilleddown-view/DrilledDownView';

class Selector extends Component {
	constructor(props) {
		super(props);
		this.defaultCountry = props.defaultCountry;
	}
	componentDidMount() {
		this.props.getAllCountries();
	}

	render() {
		const countriesSelect =
			this.props && this.props.allCountries ? (
				this.props.allCountries.map((country) => (
					<option
						key={country.iso3 || country.name}
						value={country.name}
					>
						{country.name}
					</option>
				))
			) : (
				<option key={this.defaultCountry} value={this.defaultCountry}>
					{this.defaultCountry}
				</option>
			);
		return (
			<>
				<select
					name='selectedCountry'
					onChange={(e) =>
						this.props.updateSelectedCountry(e.target.value)
					}
				>
					<option key={'-'}> -- Select Country -- </option>
					{countriesSelect}
				</select>
				{this.props && this.props.countrywiseData ? (
					<CountIndicator countryData={this.props.countrywiseData} />
				) : (
					''
				)}
				{this.props && this.props.drilledCountryData ? (
					<DrilledDownView
						drilledCountryData={this.props.drilledCountryData}
					/>
				) : (
					''
				)}
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		// defaultCountry: state.apiDataList.defaultCountry,
		allCountries: state.countries.allCountries,
		selectedCountry: state.countries.selectedCountry,
		countrywiseData: state.countries.countrywiseData,
		drilledCountryData: state.countries.drilledCountryData,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getAllCountries: () => {
			dispatch(getAllCountries);
		},
		updateSelectedCountry: (value) => {
			dispatch(updateSelectedCountry(value));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Selector);
