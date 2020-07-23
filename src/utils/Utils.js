import { indiaStateCodeMap } from './StateCodeMap';
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

	static appendNormalizedBasicInfo(data) {
		Object.keys(data).map((key) => {
			if (indiaStateCodeMap.hasOwnProperty(key)) {
				data[key] = Object.assign(data[key], indiaStateCodeMap[key]);
				if (data[key].total) {
					let totals = data[key].total;
					let {
						recovered = 0,
						confirmed = 0,
						migrated = 0,
						deceased = 0,
					} = totals;
					let active = confirmed - (recovered + migrated + deceased);
					data[key].total = Object.assign(data[key].total, {
						active: active,
					});
				}
				if (data[key].meta && data[key].meta.notes) {
					data[key].meta.notes = data[key].meta.notes.replace(
						/\n/g,
						'<br />'
					);
				}
			}
			return false;
		});
		return data;
	}
}

export default Utils;
