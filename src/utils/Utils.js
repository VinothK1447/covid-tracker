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
}

export default Utils;
