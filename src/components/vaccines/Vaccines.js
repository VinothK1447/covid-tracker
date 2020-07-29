import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../header/Header';
import Navbar from '../hoc/Navbar';
import Footer from '../footer/Footer';

import { getVaccinesData } from '../../redux/actions/VaccineAction';
import Utils from '../../utils/Utils';
import ReactTooltip from 'react-tooltip';

function Vaccines() {
	const dispatch = useDispatch();
	let vaccines = useSelector((state) => state.vaccinesData);
	useEffect(() => {
		dispatch(getVaccinesData);
	}, [dispatch]);
	vaccines = Object.keys(vaccines.vaccinesData).length
		? Utils.normalizeVaccineData(vaccines.vaccinesData.data)
		: null;
	return (
		<>
			<Header />
			<Navbar pageName='vaccines' />
			{vaccines ? (
				<div className='table-wrapper'>
					<div className='table'>
						<div className='table-header'>
							<div className='table-cell'>Vaccine Name</div>
							<div className='table-cell'>Sponsor</div>
							<div className='table-cell'>Trial Phase</div>
							<div className='table-cell'>Institution</div>
							<div className='table-cell'>Funding</div>
						</div>
						{vaccines.map((vaccine, idx) => {
							const {
								candidate,
								sponsors,
								trialPhase,
								details,
								institutions,
								funding,
							} = vaccine;
							return (
								<div className='table-row' key={idx}>
									<div className='table-cell'>
										{candidate}{' '}
										<span
											className='info-icon'
											data-tip={details}
											data-multiline={true}
										>
											<ReactTooltip />
										</span>
									</div>
									<div className='table-cell'>{sponsors}</div>
									<div className='table-cell'>
										{trialPhase}
									</div>
									<div className='table-cell'>
										{institutions}
									</div>
									<div className='table-cell'>{funding}</div>
								</div>
							);
						})}
					</div>
				</div>
			) : (
				''
			)}
			<Footer />
		</>
	);
}

export default Vaccines;
