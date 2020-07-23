import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '../hoc/Card';
import TypeAheadSelect from '../hoc/TypeAheadSelect';
import CountrywiseView from './countrywiseview/CountrywiseView';

import { getOverallData } from '../../redux/actions/OverallDataAction';
import {
	getAllCountriesData,
	updateSelectedCountry,
	updateSelectedCountryData,
} from '../../redux/actions/CountriesAction';
import Utils from '../../utils/Utils';
import strings from '../../config/strings';

class Content extends Component {
	componentDidMount() {
		this.props.getOverallData();
		this.props.getAllCountriesData();
	}

	handleChange = (e, val) => {
		this.props.updateCountrySelection(val);
		this.updateSelectedCountryData(val);
	};

	updateSelectedCountryData = (val) => {
		this.props.updateSelectedCountryData(
			Utils.getSelectedCountryInfo(this.props.allCountriesData, val)
		);
	};

	render() {
		const {
			overallData = null,
			allCountries,
			allCountriesData,
		} = this.props;
		const overallDataCards = overallData ? (
			Object.keys(overallData).map((key) => {
				if (key === 'cases') {
					return (
						<Card
							key={key}
							cardKey={key}
							cardValue={overallData[key]}
							cardSubKey={'Today cases'}
							cardSubValue={overallData.todayCases}
						/>
					);
				}
				if (key === 'active') {
					return (
						<Card
							key={key}
							cardKey={key}
							cardValue={overallData[key]}
							cardSubKey={'Critical cases'}
							cardSubValue={overallData.critical}
						/>
					);
				}
				if (key === 'recovered') {
					return (
						<Card
							key={key}
							cardKey={key}
							cardValue={overallData[key]}
							cardSubKey={'Recovered today'}
							cardSubValue={overallData.todayRecovered}
						/>
					);
				}
				if (key === 'deaths') {
					return (
						<Card
							key={key}
							cardKey={key}
							cardValue={overallData[key]}
							cardSubKey={'Deaths today'}
							cardSubValue={overallData.todayDeaths}
						/>
					);
				}
				return false;
			})
		) : (
			<>Error fetching data, kindly try after sometime.</>
		);
		return (
			<div className='content-overall-container'>
				<div className='content-overall-header'>
					<span className='content-overall-header-lua-text'>
						{strings.en['lastUpdated']}
					</span>
					{overallData.updated
						? Utils.formatDate(new Date(overallData.updated))
						: ''}
				</div>
				<div>Worldwide data</div>
				<div className='content-overall-card-container'>
					{overallDataCards}
				</div>
				{allCountriesData.length > 0 ? (
					<>
						<TypeAheadSelect
							allCountriesData={allCountriesData}
							allCountries={allCountries}
							getSelectedCountry={(e, val) =>
								this.handleChange(e, val)
							}
						/>
					</>
				) : (
					''
				)}
				{this.props.countrywiseData.length > 0 ? (
					<>
						<CountrywiseView
							countryData={this.props.countrywiseData}
						/>
					</>
				) : (
					''
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		overallData: state.apiDataList.overallData,
		allCountriesData: state.countries.allCountriesData,
		allCountries: state.countries.allCountries,
		countrywiseData: state.countries.countrywiseData,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getOverallData: () => {
			dispatch(getOverallData);
		},
		getAllCountriesData: () => {
			dispatch(getAllCountriesData);
		},
		updateCountrySelection: (val) => {
			dispatch(updateSelectedCountry(val));
		},
		updateSelectedCountryData: (val) => {
			dispatch(updateSelectedCountryData(val));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
