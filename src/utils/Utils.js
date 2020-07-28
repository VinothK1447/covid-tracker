import { indiaStateCodeMap } from './StateCodeMap';
import strings from '../config/strings';
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

	static dateTimeDiff(lastUpdated) {
		let diff = Math.floor(
			new Date().getTime() - new Date(lastUpdated).getTime()
		);
		let day = 1000 * 60 * 60 * 24;

		let days = Math.floor(diff / day);
		let months = Math.floor(days / 31);
		let years = Math.floor(months / 12);

		let remHrs = diff % 86400000;
		let remMin = remHrs % 3600000;

		let hours = Math.floor(remHrs / 3600000);
		let minutes = Math.floor(remMin / 60000);

		if (years > 0) {
			return ` (${strings.en.about} ${years} ${strings.en.year}${
				years > 1 ? strings.en.timeSuffix : ''
			}  ${strings.en.ago})`;
		}
		if (months > 0) {
			return ` (${strings.en.about} ${months} ${strings.en.month}${
				months > 1 ? strings.en.timeSuffix : ''
			} ${strings.en.ago})`;
		}
		if (days > 0) {
			return ` (${strings.en.about} ${days} ${strings.en.day}${
				days > 1 ? strings.en.timeSuffix : ''
			} ${strings.en.ago})`;
		}
		if (hours > 0) {
			return ` (${strings.en.about} ${hours} ${strings.en.hour}${
				hours > 1 ? strings.en.timeSuffix : ''
			} ${strings.en.ago})`;
		}
		if (minutes > 0) {
			return ` (${strings.en.about} ${minutes} ${strings.en.minute}${
				minutes > 1 ? strings.en.timeSuffix : ''
			} ${strings.en.ago})`;
		}
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
				if (data[key].districts) {
					Object.keys(data[key].districts).map((district) => {
						let {
							recovered = 0,
							confirmed = 0,
							migrated = 0,
							deceased = 0,
						} = data[key].districts[district].total;
						let active =
							confirmed - (recovered + migrated + deceased);
						data[key].districts[district].total = {
							...data[key].districts[district].total,
							active,
						};
						return false;
					});
				}
			}
			return false;
		});
		return data;
	}
}

export default Utils;
