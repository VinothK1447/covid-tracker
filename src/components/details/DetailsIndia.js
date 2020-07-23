import React, { Component } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import DetailDataDisplay from './DetailDataDisplay';

import { connect } from 'react-redux';
import { getAllIndiaDetailedData } from '../../redux/actions/DetailDataAction';
import Navbar from '../hoc/Navbar';

class DetailsIndia extends Component {
	componentDidMount() {
		this.props.getAllIndiaDetailedData();
	}

	render() {
		return (
			<>
				<Header />
				<Navbar pageName='india' />
				<DetailDataDisplay
					country='india'
					displayData={this.props.allIndiaDetailedData}
				/>
				<Footer />
			</>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		allIndiaDetailedData: state.detailedData.allIndiaDetailedData,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getAllIndiaDetailedData: () => {
			dispatch(getAllIndiaDetailedData);
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailsIndia);
