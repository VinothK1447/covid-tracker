import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import DetailDataDisplay from './DetailDataDisplay';

import { connect } from 'react-redux';
import {
	getAllIndiaDetailedData,
	sortDataByRequest,
	updateSelectedState,
	sortChDataByRequest,
} from '../../redux/actions/DetailDataAction';
import Navbar from '../hoc/Navbar';

class DetailsIndia extends Component {
	componentDidMount() {
		this.props.getAllIndiaDetailedData();
	}

	sortData = (e) => {
		const { sortType, sortBy } = e.target.dataset;
		this.props.sortDataByRequest('india', sortType, sortBy);
	};

	chSortData = (e) => {
		const { chSortType, chSortBy } = e.target.dataset;
		this.props.sortChDataByRequest('india', chSortType, chSortBy);
	};

	updateSelectedState = (data, country) => {
		this.props.updateSelectedState(data, country);
	};

	render() {
		return (
			<>
				<Header />
				<Navbar pageName='india' />
				<DetailDataDisplay
					country='india'
					countryCode='IN'
					displayData={this.props.allIndiaDetailedData}
					updateSelectedState={(data, country = 'india') =>
						this.updateSelectedState(data, country)
					}
					selectedState={this.props.selectedState}
					handleClick={this.handleClick}
					sortData={(e) => this.sortData(e)}
					sortBy={this.props.sortBy}
					sortType={this.props.sortType}
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
		allIndiaDetailedData: state.detailedData.allIndiaDetailedData,
		selectedState: state.detailedData.selectedState,
		sortBy: state.detailedData.sortBy,
		sortType: state.detailedData.sortType,
		chSortBy: state.detailedData.chSortBy,
		chSortType: state.detailedData.chSortType,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getAllIndiaDetailedData: () => {
			dispatch(getAllIndiaDetailedData);
		},
		updateSelectedState: (data, country) => {
			dispatch(updateSelectedState(data, country));
		},
		sortDataByRequest: (country, sortType, sortBy) => {
			dispatch(sortDataByRequest(country, sortType, sortBy));
		},
		sortChDataByRequest: (country, chSortType, chSortBy) => {
			dispatch(sortChDataByRequest(country, chSortType, chSortBy));
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailsIndia);
