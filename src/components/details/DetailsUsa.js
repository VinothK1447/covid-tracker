import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import DetailDataDisplay from './DetailDataDisplay';
import { connect } from 'react-redux';
import {
	getUSAsDetailedData,
	sortDataByRequest,
} from '../../redux/actions/DetailDataAction';
import Navbar from '../hoc/Navbar';

class DetailsUsa extends Component {
	componentDidMount() {
		this.props.getUSAsDetailedData();
	}

	sortData = (e) => {
		const { sortType, sortBy } = e.target.dataset;
		this.props.sortDataByRequest('usa', sortType, sortBy);
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
				/>
				<Footer />
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		usaDetailedData: state.detailedData.usaDetailedData,
		sortBy: state.detailedData.sortBy,
		sortType: state.detailedData.sortType,
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
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsUsa);
