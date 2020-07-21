class Utils {
	static formatNumber(number) {
		let locale = navigator.language;
		return new Intl.NumberFormat(locale).format(number);
	}

	static formatDate(date) {
		let locale = navigator.language;
		let options = {
			year: 'numeric',
			month: 'numeric',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric',
			hour12: true,
		};
		return new Intl.DateTimeFormat(locale, options).format(date);
	}

	static extractCountriesInfo(allCountriesData) {
		let allCountries = allCountriesData.map((country) => {
			return {
				country: country.country,
				countryInfo: country.countryInfo,
			};
		});

		return allCountries;
	}

	static getSelectedCountryInfo(allCountriesData, selectedCountry) {
		let selectedCountryInfo = allCountriesData.filter(
			(country) => country.country === selectedCountry
		);
		return selectedCountryInfo;
	}
}

export default Utils;
