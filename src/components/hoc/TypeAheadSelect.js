import React, { Component } from 'react'

class TypeAheadSelect extends Component {
	constructor(props) {
		super(props)

		this.state = {
			filteredCountries: []
		}
		this.selectOnTypeRef = React.createRef()
		this.listingRef = React.createRef()
		this.clearElemRef = React.createRef()
	}

	filterCountries = (e) => {
		let filteredSuggestions
		let val = e.target.value
		if (val && this.clearElemRef.current.classList.contains('hide')) {
			this.clearElemRef.current.classList.remove('hide')
			this.clearElemRef.current.classList.add('show')
		}
		if (!val && this.clearElemRef.current.classList.contains('show')) {
			this.clearElemRef.current.classList.remove('show')
			this.clearElemRef.current.classList.add('hide')
		}
		if (val.length >= 2) {
			filteredSuggestions = this.props.allCountries.filter((country) => {
				return country?.country.toLowerCase().indexOf(val.toLowerCase()) > -1 || country?.countryInfo?.iso3?.toLowerCase().indexOf(val.toLowerCase()) > -1
			})
			this.setState({ filteredCountries: filteredSuggestions })
		}
		if (val.length < 2) {
			this.props.getSelectedCountry(e, '')
			this.setState({ filteredCountries: [] })
		}
	}

	clearInput = (e) => {
		this.selectOnTypeRef.current.value = ''
		this.props.getSelectedCountry(e, '')
		this.setState({ filteredCountries: [] })
		this.clearElemRef.current.classList.remove('show')
		this.clearElemRef.current.classList.add('hide')
	}

	updateCountrySelection = (e) => {
		let dataValue = JSON.parse(e.target.dataset.value)
		this.selectOnTypeRef.current.value = dataValue.country
		this.props.getSelectedCountry(e, dataValue.country)
		this.setState({ filteredCountries: [] })
	}

	render() {
		let suggestionList
		if (this.state.filteredCountries.length > 0) {
			suggestionList = (
				<ul className='typeahead-list' ref={this.listingRef}>
					{this.state.filteredCountries.map((country) => {
						return (
							<li key={country.countryInfo.iso3} className='typeahead-list-item' data-value={JSON.stringify(country)} onClick={this.updateCountrySelection}>
								<img src={country.countryInfo.flag} height='15' width='15' alt={country.countryInfo.iso2} /> {country.country} ({country.countryInfo.iso3})
							</li>
						)
					})}
				</ul>
			)
		}
		return (
			<>
				<div className='typeahead-container'>
					<span className='input-container'>
						<input
							type='text'
							name='selectOnType'
							ref={this.selectOnTypeRef}
							autoComplete='off'
							placeholder='Filter by country...'
							className='typeahead-input'
							onChange={this.filterCountries}
						/>
						<span className='clear-input hide' ref={this.clearElemRef} onClick={this.clearInput}>
							x
						</span>
					</span>
					{suggestionList}
				</div>
			</>
		)
	}
}

export default TypeAheadSelect
