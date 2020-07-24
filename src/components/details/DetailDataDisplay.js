import React from 'react';
import strings from '../../config/strings';
import ReactTooltip from 'react-tooltip';

function DetailDataDisplay(props) {
	let { displayData, country } = props;
	let dataObj = Object.keys(displayData).length ? displayData : [];
	let frameHeader = frameHeaderMarkup(country);
	return (
		<>
			<div className='container'>
				<div className='container-left'>
					<div className='table-info'>* {strings.en['*']}</div>
					<div className='table-wrapper'>
						<div className='table'>
							{frameHeader}
							{country &&
							country.toLowerCase() === 'india' &&
							Object.keys(dataObj).length ? (
								<>
									<div
										className='table-row'
										key={'ind-total'}
									>
										<div className='table-cell state-cell'>
											{dataObj['TT'].stateName}
										</div>
										<div className='table-cell other-cell'>
											{dataObj['TT'].total.confirmed
												? dataObj['TT'].total.confirmed
												: 0}{' '}
											{dataObj['TT'].delta &&
											dataObj['TT'].delta.confirmed ? (
												dataObj['TT'].delta
													.confirmed ? (
													<span className='up confirmed'>
														{
															dataObj['TT'].delta
																.confirmed
														}
													</span>
												) : (
													<span className='down confirmed'>
														{
															dataObj['TT'].delta
																.confirmed
														}
													</span>
												)
											) : (
												''
											)}
										</div>
										<div className='table-cell'>
											{dataObj['TT'].total.active}
										</div>
										<div className='table-cell'>
											{dataObj['TT'].total.recovered
												? dataObj['TT'].total.recovered
												: 0}{' '}
											{dataObj['TT'].delta &&
											dataObj['TT'].delta.recovered ? (
												dataObj['TT'].delta
													.recovered ? (
													<span className='up recovered'>
														{
															dataObj['TT'].delta
																.recovered
														}
													</span>
												) : (
													<span className='down recovered'>
														{
															dataObj['TT'].delta
																.recovered
														}
													</span>
												)
											) : (
												''
											)}
										</div>
										<div className='table-cell'>
											{dataObj['TT'].total.deceased
												? dataObj['TT'].total.deceased
												: 0}{' '}
											{dataObj['TT'].delta &&
											dataObj['TT'].delta.deceased ? (
												dataObj['TT'].delta.deceased ? (
													<span className='up deceased'>
														{
															dataObj['TT'].delta
																.deceased
														}
													</span>
												) : (
													<span className='down deceased'>
														{
															dataObj['TT'].delta
																.deceased
														}
													</span>
												)
											) : (
												''
											)}
										</div>
									</div>

									{Object.keys(dataObj).map((arr, idx) => {
										return arr !== 'TT' ? (
											<div
												className='table-row'
												key={idx}
											>
												<div className='table-cell state-cell'>
													{dataObj[arr].stateName}{' '}
													{dataObj[arr].meta.notes ? (
														<span
															data-tip={
																dataObj[arr]
																	.meta.notes
															}
															data-multiline={
																true
															}
															className='info-icon'
														>
															<ReactTooltip />
														</span>
													) : (
														''
													)}
												</div>
												<div className='table-cell'>
													{dataObj[arr].total
														.confirmed
														? dataObj[arr].total
																.confirmed
														: 0}{' '}
													{dataObj[arr].delta &&
													dataObj[arr].delta
														.confirmed ? (
														dataObj[arr].delta
															.confirmed ? (
															<span className='up confirmed'>
																{
																	dataObj[arr]
																		.delta
																		.confirmed
																}
															</span>
														) : (
															<span className='down confirmed'>
																{
																	dataObj[arr]
																		.delta
																		.confirmed
																}
															</span>
														)
													) : (
														''
													)}
												</div>
												<div className='table-cell'>
													{dataObj[arr].total.active}
												</div>
												<div className='table-cell'>
													{dataObj[arr].total
														.recovered
														? dataObj[arr].total
																.recovered
														: 0}{' '}
													{dataObj[arr].delta &&
													dataObj[arr].delta
														.recovered ? (
														dataObj[arr].delta
															.recovered ? (
															<span className='up recovered'>
																{
																	dataObj[arr]
																		.delta
																		.recovered
																}
															</span>
														) : (
															<span className='down recovered'>
																{
																	dataObj[arr]
																		.delta
																		.recovered
																}
															</span>
														)
													) : (
														''
													)}
												</div>
												<div className='table-cell'>
													{dataObj[arr].total.deceased
														? dataObj[arr].total
																.deceased
														: 0}{' '}
													{dataObj[arr].delta &&
													dataObj[arr].delta
														.deceased ? (
														dataObj[arr].delta
															.deceased ? (
															<span className='up deceased'>
																{
																	dataObj[arr]
																		.delta
																		.deceased
																}
															</span>
														) : (
															<span className='down deceased'>
																{
																	dataObj[arr]
																		.delta
																		.deceased
																}
															</span>
														)
													) : (
														''
													)}
												</div>
											</div>
										) : (
											''
										);
									})}
								</>
							) : (
								<>
									{dataObj.map((arr, idx) => {
										return (
											<div
												className='table-row'
												key={idx}
											>
												<div className='table-cell'>
													{arr.state}
												</div>
												<div className='table-cell'>
													{arr.cases ? arr.cases : 0}{' '}
													{arr.todayCases ? (
														arr.todayCases ? (
															<span className='up confirmed'>
																{arr.todayCases}
															</span>
														) : (
															<span className='down confirmed'>
																{arr.todayCases}
															</span>
														)
													) : (
														''
													)}
												</div>
												<div className='table-cell'>
													{arr.active}
												</div>
												<div className='table-cell'>
													{arr.deaths
														? arr.deaths
														: 0}{' '}
													{arr.todayDeaths ? (
														arr.todayDeaths ? (
															<span className='up recovered'>
																{
																	arr.todayDeaths
																}
															</span>
														) : (
															<span className='down recovered'>
																{
																	arr.todayDeaths
																}
															</span>
														)
													) : (
														''
													)}
												</div>
												<div className='table-cell'>
													{arr.tests ? arr.tests : 0}
												</div>
											</div>
										);
									})}
								</>
							)}
						</div>
					</div>
				</div>
				<div className='container-right'></div>
			</div>
		</>
	);
}

const frameHeaderMarkup = (country) => {
	if (country && country.toLowerCase() === 'india') {
		return (
			<>
				<div className='table-header'>
					<div className='table-cell state-cell'>
						{strings.en['stateOrUT']}
					</div>
					<div
						className='table-cell confirmed-cell'
						dangerouslySetInnerHTML={{
							__html: strings.en['confirmedWithDelta'],
						}}
					></div>
					<div className='table-cell active-cell'>
						{strings.en['active']}
					</div>
					<div
						className='table-cell recovered-cell'
						dangerouslySetInnerHTML={{
							__html: strings.en['recoveredWithDelta'],
						}}
					></div>
					<div
						className='table-cell deaths-cell'
						dangerouslySetInnerHTML={{
							__html: strings.en['deathsWithDelta'],
						}}
					></div>
				</div>
			</>
		);
	}
	if (country && country.toLowerCase() === 'usa') {
		return (
			<>
				<div className='table-header'>
					<div className='table-cell state-cell'>
						{strings.en['state']}
					</div>
					<div
						className='table-cell'
						dangerouslySetInnerHTML={{
							__html: strings.en['confirmedWithDelta'],
						}}
					></div>
					<div className='table-cell'>{strings.en['active']}</div>
					<div
						className='table-cell'
						dangerouslySetInnerHTML={{
							__html: strings.en['deathsWithDelta'],
						}}
					></div>
					<div className='table-cell'>{strings.en['tests']}</div>
				</div>
			</>
		);
	}
};

// const createDataMarkup = (country, dataObj) => {};

// const tableDataMarkup = (country, statewiseData) => {
// 	if (country && country.toLowerCase() === 'india' && statewiseData.length) {
// 		return statewiseData.map((key, idx) => {
// 			return (
// 				<div className='table-row' key={idx}>
// 					{Object.keys(key).map((el) => {
// 						return (
// 							<>
// 								<div className='table-cell state-cell'>
// 									{key['state']}
// 								</div>
// 								<div className='table-cell confirmed-cell'>
// 									{key['confirmed']} ({key['deltaconfirmed']})
// 								</div>
// 								<div className='table-cell active-cell'>
// 									{key['active']}
// 								</div>
// 								<div className='table-cell recovered-cell'>
// 									{key['recovered']} ({key['deltarecovered']})
// 								</div>
// 								<div className='table-cell deaths-cell'>
// 									{key['deaths']} ({key['deltadeaths']})
// 								</div>
// 							</>
// 						);
// 					})}
// 				</div>
// 			);
// 		});
// 	}
// 	if (country && country.toLowerCase() === 'usa') {
// 	}
// };

export default DetailDataDisplay;
