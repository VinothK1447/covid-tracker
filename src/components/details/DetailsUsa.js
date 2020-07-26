import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import DetailDataDisplay from './DetailDataDisplay';
import { connect } from 'react-redux';
import { getUSAsDetailedData } from '../../redux/actions/DetailDataAction';
import Navbar from '../hoc/Navbar';

class DetailsUsa extends Component {
	componentDidMount() {
		this.props.getUSAsDetailedData();
	}
	render() {
		return (
			<>
				<Header />
				<Navbar pageName='usa' />
				<DetailDataDisplay
					country='usa'
					countryCode='US'
					displayData={this.props.usaDetailedData}
				/>
				<Footer />
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		usaDetailedData: state.detailedData.usaDetailedData,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getUSAsDetailedData: () => {
			dispatch(getUSAsDetailedData);
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsUsa);
