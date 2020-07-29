import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import DetailDataDisplay from './DetailDataDisplay';
import { connect } from 'react-redux';
import {
	getUSAsDetailedData,
	sortDataByRequest,
	getUSAStateCountiesData,
	updateSelectedState,
	sortChDataByRequest,
} from '../../redux/actions/DetailDataAction';
import Navbar from '../hoc/Navbar';

class DetailsUsa extends Component {
	componentDidMount() {
		this.props.getUSAsDetailedData();
		this.props.getUSAStateCountiesData();
	}

	sortData = (e) => {
		const { sortType, sortBy } = e.target.dataset;
		this.props.sortDataByRequest('usa', sortType, sortBy);
	};

	chSortData = (e) => {
		const { chSortType, chSortBy } = e.target.dataset;
		this.props.sortChDataByRequest('usa', chSortType, chSortBy);
	};

	updateSelectedState = (data, country) => {
		this.props.updateSelectedState(data, country);
	};

	render() {
		return (
			<>
				<Header />
				<Navbar pageName='usa' />
				<DetailDataDisplay
					country='usa'
					countryCode='US'
					displayData={this.props.usaDetailedData}
					sortData={(e) => this.sortData(e)}
					sortBy={this.props.sortBy}
					sortType={this.props.sortType}
					updateSelectedState={(data, country = 'usa') =>
						this.updateSelectedState(data, country)
					}
					selectedState={this.props.selectedState}
					selectedStateCounties={this.props.selectedStateCounties}
					chSortData={(e) => this.chSortData(e)}
					chSortBy={this.props.chSortBy}
					chSortType={this.props.chSortType}
				/>
				<Footer />
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		usaDetailedData: state.detailedData.usaDetailedData,
		selectedState: state.detailedData.selectedState,
		selectedStateCounties: state.detailedData.selectedStateCounties,
		sortBy: state.detailedData.sortBy,
		sortType: state.detailedData.sortType,
		chSortBy: state.detailedData.chSortBy,
		chSortType: state.detailedData.chSortType,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getUSAsDetailedData: () => {
			dispatch(getUSAsDetailedData);
		},
		sortDataByRequest: (country, sortType, sortBy) => {
			dispatch(sortDataByRequest(country, sortType, sortBy));
		},
		getUSAStateCountiesData: () => {
			dispatch(getUSAStateCountiesData);
		},
		updateSelectedState: (data, country) => {
			dispatch(updateSelectedState(data, country));
		},
		sortChDataByRequest: (country, chSortType, chSortBy) => {
			dispatch(sortChDataByRequest(country, chSortType, chSortBy));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsUsa);
