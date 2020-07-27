import React, { useState } from 'react';
import strings from '../../config/strings';
import ReactTooltip from 'react-tooltip';
import SelectedStateDetails from './SelectedStateDetails';
// import Chart from '../charts/Chart';

function DetailDataDisplay(props) {
	let { displayData, country } = props;
	let dataObj = Object.keys(displayData).length ? displayData : [];

	const [selectedStateData, setSelectedStateData] = useState({});

	function handleClick(e, obj) {
		const row = e.target.closest('.table-row');
		const rows = document.querySelectorAll('#stateTbl .table-row');
		setSelectedStateData(obj);
		for (let i = 0; i < rows.length; i++) {
			if (rows[i].classList.contains('highlight-row')) {
				rows[i].classList.remove('highlight-row');
			}
		}
		row.classList.add('highlight-row');
		window.scrollTo(0, document.getElementById('state-section').offsetTop);
	}

	const frameHeaderMarkup = (country) => {
		if (country && country.toLowerCase() === 'india') {
			return (
				<>
					<div className='table-header'>
						<div
							className={
								props.sortBy === 'stateName' &&
								props.sortType === 'asc'
									? 'table-cell state-cell asc'
									: props.sortBy === 'stateName' &&
									  props.sortType === 'desc'
									? 'table-cell state-cell desc'
									: 'table-cell state-cell'
							}
							data-sort-type={
								props.sortBy === 'stateName' &&
								props.sortType === 'asc'
									? 'desc'
									: 'asc'
							}
							data-sort-by='stateName'
							onClick={(e) => props.sortData(e)}
						>
							{strings.en['stateOrUT']}
						</div>
						<div
							className={
								props.sortBy === 'confirmed' &&
								props.sortType === 'asc'
									? 'table-cell asc'
									: props.sortBy === 'confirmed' &&
									  props.sortType === 'desc'
									? 'table-cell desc'
									: 'table-cell'
							}
							data-sort-type={
								props.sortBy === 'confirmed' &&
								props.sortType === 'asc'
									? 'desc'
									: 'asc'
							}
							data-sort-by='confirmed'
							onClick={(e) => props.sortData(e)}
						>
							{strings.en.confirmed}
							{strings.en.withDelta}
						</div>
						<div
							className={
								props.sortBy === 'active' &&
								props.sortType === 'asc'
									? 'table-cell asc'
									: props.sortBy === 'active' &&
									  props.sortType === 'desc'
									? 'table-cell desc'
									: 'table-cell'
							}
							data-sort-type={
								props.sortBy === 'active' &&
								props.sortType === 'asc'
									? 'desc'
									: 'asc'
							}
							data-sort-by='active'
							onClick={(e) => props.sortData(e)}
						>
							{strings.en['active']}
						</div>
						<div
							className={
								props.sortBy === 'recovered' &&
								props.sortType === 'asc'
									? 'table-cell asc'
									: props.sortBy === 'recovered' &&
									  props.sortType === 'desc'
									? 'table-cell desc'
									: 'table-cell'
							}
							data-sort-type={
								props.sortBy === 'recovered' &&
								props.sortType === 'asc'
									? 'desc'
									: 'asc'
							}
							data-sort-by='recovered'
							onClick={(e) => props.sortData(e)}
						>
							{strings.en.recovered}
							{strings.en.withDelta}
						</div>
						<div
							className={
								props.sortBy === 'deceased' &&
								props.sortType === 'asc'
									? 'table-cell asc'
									: props.sortBy === 'deceased' &&
									  props.sortType === 'desc'
									? 'table-cell desc'
									: 'table-cell'
							}
							data-sort-type={
								props.sortBy === 'deceased' &&
								props.sortType === 'asc'
									? 'desc'
									: 'asc'
							}
							data-sort-by='deceased'
							onClick={(e) => props.sortData(e)}
						>
							{strings.en.deaths}
							{strings.en.withDelta}
						</div>
					</div>
				</>
			);
		}
		if (country && country.toLowerCase() === 'usa') {
			return (
				<>
					<div className='table-header'>
						<div
							className={
								props.sortBy === 'state' &&
								props.sortType === 'asc'
									? 'table-cell state-cell asc'
									: props.sortBy === 'state' &&
									  props.sortType === 'desc'
									? 'table-cell state-cell desc'
									: 'table-cell'
							}
							data-sort-type={
								props.sortBy === 'state' &&
								props.sortType === 'asc'
									? 'desc'
									: 'asc'
							}
							data-sort-by='state'
							onClick={(e) => props.sortData(e)}
						>
							{strings.en['state']}
						</div>
						<div
							className={
								props.sortBy === 'cases' &&
								props.sortType === 'asc'
									? 'table-cell asc'
									: props.sortBy === 'cases' &&
									  props.sortType === 'desc'
									? 'table-cell desc'
									: 'table-cell'
							}
							data-sort-type={
								props.sortBy === 'cases' &&
								props.sortType === 'asc'
									? 'desc'
									: 'asc'
							}
							data-sort-by='cases'
							onClick={(e) => props.sortData(e)}
						>
							{strings.en.confirmed}
							{strings.en.withDelta}
						</div>
						<div
							className={
								props.sortBy === 'active' &&
								props.sortType === 'asc'
									? 'table-cell asc'
									: props.sortBy === 'active' &&
									  props.sortType === 'desc'
									? 'table-cell desc'
									: 'table-cell'
							}
							data-sort-type={
								props.sortBy === 'active' &&
								props.sortType === 'asc'
									? 'desc'
									: 'asc'
							}
							data-sort-by='active'
							onClick={(e) => props.sortData(e)}
						>
							{strings.en['active']}
						</div>
						<div
							className={
								props.sortBy === 'deaths' &&
								props.sortType === 'asc'
									? 'table-cell asc'
									: props.sortBy === 'deaths' &&
									  props.sortType === 'desc'
									? 'table-cell desc'
									: 'table-cell'
							}
							data-sort-type={
								props.sortBy === 'deaths' &&
								props.sortType === 'asc'
									? 'desc'
									: 'asc'
							}
							data-sort-by='deaths'
							onClick={(e) => props.sortData(e)}
						>
							{strings.en.deaths}
							{strings.en.withDelta}
						</div>
						<div
							className={
								props.sortBy === 'tests' &&
								props.sortType === 'asc'
									? 'table-cell asc'
									: props.sortBy === 'tests' &&
									  props.sortType === 'desc'
									? 'table-cell desc'
									: 'table-cell'
							}
							data-sort-type={
								props.sortBy === 'tests' &&
								props.sortType === 'asc'
									? 'desc'
									: 'asc'
							}
							data-sort-by='tests'
							onClick={(e) => props.sortData(e)}
						>
							{strings.en['tests']}
						</div>
					</div>
				</>
			);
		}
	};
	let frameHeader = frameHeaderMarkup(country);

	return (
		<>
			<div className='container'>
				<div className='container-left'>
					<div className='table-info'>* {strings.en['*']}</div>
					<div className='table-wrapper'>
						<div className='table' id='stateTbl'>
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
												onClick={(e) =>
													handleClick(e, dataObj[arr])
												}
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
												onClick={(e) =>
													handleClick(e, arr)
												}
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
				<div className='container-right'>
					{selectedStateData ? (
						<SelectedStateDetails
							selectedState={selectedStateData}
						/>
					) : (
						''
					)}
				</div>
			</div>
		</>
	);
}

export default DetailDataDisplay;
