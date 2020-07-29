import React from 'react';
import Utils from '../../utils/Utils';
import strings from '../../config/strings';
import CountUp from 'react-countup';
import ReactTooltip from 'react-tooltip';

function DistrictDetails(props) {
	// console.log(props);
	const frameDisplay = (data) => {
		const { stateName, districts, meta } = data;

		const metaDataMarkup = meta ? (
			<div key={meta.population} className='state-meta'>
				<div>
					<label htmlFor='lastUpdated'>
						{strings['en'].lastUpdated}
					</label>
					<span>
						{Utils.formatDate(new Date(meta.last_updated))}{' '}
						{Utils.dateTimeDiff(new Date(meta.last_updated))}
					</span>
				</div>
				<div>
					<label htmlFor='population'>
						{strings['en'].population}
					</label>{' '}
					<span>
						<CountUp
							start={0}
							end={meta.population}
							separator=','
						/>
					</span>
				</div>
				<div>
					<a
						href={meta.tested.source}
						target='_blank'
						rel='noopener noreferrer'
					>
						{strings.en.sourceLbl}
					</a>
				</div>
			</div>
		) : (
			''
		);

		const districtsDataMarkup = districts ? (
			<div key='districts-container' className='state-districts'>
				<details open>
					<summary>
						{stateName}
						{strings.en.districtDetailsLbl}
					</summary>
					<div className='table-wrapper'>
						<div className='table'>
							<div className='table-header'>
								<div
									className={
										props.chSortBy === 'districts' &&
										props.chSortType === 'asc'
											? 'table-cell district-cell asc'
											: props.chSortBy === 'districts' &&
											  props.chSortType === 'desc'
											? 'table-cell district-cell desc'
											: 'table-cell district-cell'
									}
									data-ch-sort-type={
										props.chSortBy === 'districts' &&
										props.chSortType === 'asc'
											? 'desc'
											: 'asc'
									}
									data-ch-sort-by='districts'
									onClick={(e) => props.chSortData(e)}
								>
									{strings.en.district}
								</div>
								<div
									className={
										props.chSortBy === 'confirmed' &&
										props.chSortType === 'asc'
											? 'table-cell asc'
											: props.chSortBy === 'confirmed' &&
											  props.chSortType === 'desc'
											? 'table-cell desc'
											: 'table-cell'
									}
									data-ch-sort-type={
										props.chSortBy === 'confirmed' &&
										props.chSortType === 'asc'
											? 'desc'
											: 'asc'
									}
									data-ch-sort-by='confirmed'
									onClick={(e) => props.chSortData(e)}
								>
									{strings.en.confirmed}
									{strings.en.withDelta}
								</div>
								<div
									className={
										props.chSortBy === 'active' &&
										props.chSortType === 'asc'
											? 'table-cell asc'
											: props.chSortBy === 'active' &&
											  props.chSortType === 'desc'
											? 'table-cell desc'
											: 'table-cell'
									}
									data-ch-sort-type={
										props.chSortBy === 'active' &&
										props.chSortType === 'asc'
											? 'desc'
											: 'asc'
									}
									data-ch-sort-by='active'
									onClick={(e) => props.chSortData(e)}
								>
									{strings.en.active}
								</div>
								<div
									className={
										props.chSortBy === 'recovered' &&
										props.chSortType === 'asc'
											? 'table-cell asc'
											: props.chSortBy === 'recovered' &&
											  props.chSortType === 'desc'
											? 'table-cell desc'
											: 'table-cell'
									}
									data-ch-sort-type={
										props.chSortBy === 'recovered' &&
										props.chSortType === 'asc'
											? 'desc'
											: 'asc'
									}
									data-ch-sort-by='recovered'
									onClick={(e) => props.chSortData(e)}
								>
									{strings.en.recovered}
									{strings.en.withDelta}
								</div>
								<div
									className={
										props.chSortBy === 'deceased' &&
										props.chSortType === 'asc'
											? 'table-cell asc'
											: props.chSortBy === 'deceased' &&
											  props.chSortType === 'desc'
											? 'table-cell desc'
											: 'table-cell'
									}
									data-ch-sort-type={
										props.chSortBy === 'deceased' &&
										props.chSortType === 'asc'
											? 'desc'
											: 'asc'
									}
									data-ch-sort-by='deceased'
									onClick={(e) => props.chSortData(e)}
								>
									{strings.en.deaths}
									{strings.en.withDelta}
								</div>
							</div>
							{Object.keys(districts).map((district, idx) => {
								return (
									<div className='table-row' key={idx}>
										<div className='table-cell district-cell'>
											{district}{' '}
											{districts[district].meta &&
											districts[district].meta
												.population ? (
												<span
													data-tip={`${
														strings.en.population
													}: ${Utils.formatNumber(
														districts[district].meta
															.population
													)}`}
													data-multiline={true}
													className='info-icon'
												>
													<ReactTooltip />
												</span>
											) : (
												''
											)}
										</div>
										<div className='table-cell'>
											{districts[district].total
												.confirmed || 0}{' '}
											{districts[district].delta &&
											districts[district].delta
												.confirmed ? (
												districts[district].delta
													.confirmed ? (
													<span className='up confirmed'>
														{
															districts[district]
																.delta.confirmed
														}
													</span>
												) : (
													<span className='down confirmed'>
														{
															districts[district]
																.delta.confirmed
														}
													</span>
												)
											) : (
												''
											)}
										</div>
										<div className='table-cell'>
											{districts[district].total.active ||
												0}{' '}
										</div>
										<div className='table-cell'>
											{districts[district].total
												.recovered || 0}{' '}
											{districts[district].delta &&
											districts[district].delta
												.recovered ? (
												districts[district].delta
													.recovered ? (
													<span className='up recovered'>
														{
															districts[district]
																.delta.recovered
														}
													</span>
												) : (
													<span className='down recovered'>
														{
															districts[district]
																.delta.recovered
														}
													</span>
												)
											) : (
												''
											)}
										</div>
										<div className='table-cell'>
											{districts[district].total
												.deceased || 0}{' '}
											{districts[district].delta &&
											districts[district].delta
												.deceased ? (
												districts[district].delta
													.deceased ? (
													<span className='up deceased'>
														{
															districts[district]
																.delta.deceased
														}
													</span>
												) : (
													<span className='down deceased'>
														{
															districts[district]
																.delta.deceased
														}
													</span>
												)
											) : (
												''
											)}
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</details>
			</div>
		) : (
			''
		);

		if (stateName && districts && meta) {
			document.querySelector('.state-section').classList.remove('hide');
		}
		return (
			<>
				{<div className='state-name'>{stateName}</div>}
				{metaDataMarkup}
				{districtsDataMarkup}
			</>
		);
	};
	const frameUSCountiesDisplay = (data) => {
		return <>{<div className='state-name'>{'States'}</div>}</>;
	};

	const renderStateDetails =
		props && props.country === 'india'
			? Object.keys(props.selectedState).length
				? frameDisplay(props.selectedState)
				: ''
			: props.selectedStateCounties.length
			? frameUSCountiesDisplay(props.selectedStateCounties)
			: '';

	return (
		<div
			key='selected-state-details'
			className='state-section'
			id='state-section'
		>
			{renderStateDetails}
		</div>
	);
}

export default DistrictDetails;
