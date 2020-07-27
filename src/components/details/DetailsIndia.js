import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import DetailDataDisplay from './DetailDataDisplay';

import { connect } from 'react-redux';
import {
	getAllIndiaDetailedData,
	sortDataByRequest,
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

	render() {
		return (
			<>
				<Header />
				<Navbar pageName='india' />
				<DetailDataDisplay
					country='india'
					countryCode='IN'
					displayData={this.props.allIndiaDetailedData}
					handleClick={this.handleClick}
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
		allIndiaDetailedData: state.detailedData.allIndiaDetailedData,
		sortBy: state.detailedData.sortBy,
		sortType: state.detailedData.sortType,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getAllIndiaDetailedData: () => {
			dispatch(getAllIndiaDetailedData);
		},
		sortDataByRequest: (country, sortType, sortBy) => {
			dispatch(sortDataByRequest(country, sortType, sortBy));
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailsIndia);
