import React, { Component } from 'react';
import { connect } from 'react-redux';

import Selector from './selector/Selector';
import Card from '../hoc/Card';

import {
	getDefaultCountry,
	getOverallData,
} from '../../redux/actions/OverallDataAction';

class Content extends Component {
	componentDidMount() {
		this.props.getUserCountry();
		this.props.getOverallData();
	}

	render() {
		const overallDataCards =
			this.props && this.props.overallData ? (
				Object.keys(this.props.overallData).map((key, idx) =>
					key === 'confirmed' ||
					key === 'recovered' ||
					key === 'deaths' ? (
						<Card
							key={this.props.overallData[key].detail}
							cardKey={key}
							cardValue={this.props.overallData[key].value}
						/>
					) : (
						''
					)
				)
			) : (
				<h5>Loading...</h5>
			);
		return (
			<>
				<div>Worldwide data</div>
				{overallDataCards}
				<Selector defaultCountry={this.props.defaultCountry} />
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		defaultCountry: state.apiDataList.defaultCountry,
		overallData: state.apiDataList.overallData,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getUserCountry: () => {
			dispatch(getDefaultCountry);
		},
		getOverallData: () => {
			dispatch(getOverallData);
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
