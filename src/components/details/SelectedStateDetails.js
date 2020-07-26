import React from 'react';
import Utils from '../../utils/Utils';
import strings from '../../config/strings';
import CountUp from 'react-countup';
import ReactTooltip from 'react-tooltip';

function DistrictDetails(props) {
	const renderStateDetails =
		props && Object.keys(props.selectedState).length
			? frameDisplay(props.selectedState)
			: '';

	return (
		<div
			key='selected-state-details'
			className='state-section hide'
			id='state-section'
		>
			{renderStateDetails}
		</div>
	);
}

const frameDisplay = (data) => {
	const { stateName, districts, meta } = data;

	const metaDataMarkup = meta ? (
		<div key={meta.population} className='state-meta'>
			<div>
				<label htmlFor='stateName'>{strings['en'].lastUpdated}</label>
				<span>{Utils.formatDate(new Date(meta.last_updated))}</span>
			</div>
			<div>
				<label htmlFor='population'>{strings['en'].population}</label>{' '}
				<span>
					<CountUp start={0} end={meta.population} separator=',' />
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
							<div className='table-cell district-cell'>
								District
							</div>
							<div
								className='table-cell'
								dangerouslySetInnerHTML={{
									__html: `${strings.en.confirmed}${strings.en.withDelta}`,
								}}
							></div>
							<div className='table-cell'>
								{strings.en['active']}
							</div>
							<div
								className='table-cell'
								dangerouslySetInnerHTML={{
									__html: `${strings.en.recovered}${strings.en.withDelta}`,
								}}
							></div>
							<div
								className='table-cell'
								dangerouslySetInnerHTML={{
									__html: `${strings.en.deaths}${strings.en.withDelta}`,
								}}
							></div>
						</div>
						{Object.keys(districts).map((district, idx) => {
							let {
								confirmed = 0,
								recovered = 0,
								migrated = 0,
								deceased = 0,
							} = districts[district].total;
							let active =
								confirmed - (recovered + migrated + deceased);
							return (
								<div className='table-row' key={idx}>
									<div className='table-cell district-cell'>
										{district}{' '}
										{districts[district].meta &&
										districts[district].meta.population ? (
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
										{districts[district].total.confirmed ||
											0}{' '}
										{districts[district].delta &&
										districts[district].delta.confirmed ? (
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
									<div className='table-cell'>{active}</div>
									<div className='table-cell'>
										{districts[district].total.recovered ||
											0}{' '}
										{districts[district].delta &&
										districts[district].delta.recovered ? (
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
										{districts[district].total.deceased ||
											0}{' '}
										{districts[district].delta &&
										districts[district].delta.deceased ? (
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

export default DistrictDetails;
