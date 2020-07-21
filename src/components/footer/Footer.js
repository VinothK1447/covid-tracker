import React, { Component } from 'react';
import { ReactComponent as Contact } from '../../images/contact.svg';
import { ReactComponent as Source } from '../../images/source.svg';
import ReactTooltip from 'react-tooltip';
import strings from '../../config/strings';

class Footer extends Component {
	render() {
		return (
			<footer>
				<div>
					<span>
						<a href='mailto:covidtrackerinfo@gmail.com'>
							<Contact />
						</a>
					</span>
					<span data-tip={strings.en.datasource}>
						<Source />
						<ReactTooltip />
					</span>
				</div>
			</footer>
		);
	}
}

export default Footer;
