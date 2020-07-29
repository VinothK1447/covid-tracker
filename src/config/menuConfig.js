const menuConfig = {
	home: {
		left: {
			text: 'India - Current Status',
			link: '/detailsIndia',
		},
		center: {
			text: 'Vaccine Status',
			link: '/vaccines',
		},
		right: {
			text: 'USA - Current Status',
			link: '/detailsUsa',
		},
	},
	india: {
		left: {
			text: 'Home',
			link: '/',
		},
		center: {
			text: 'Vaccine Status',
			link: '/vaccines',
		},
		right: {
			text: 'USA - Current Status',
			link: '/detailsUsa',
		},
	},
	usa: {
		left: {
			text: 'Home',
			link: '/',
		},
		center: {
			text: 'Vaccine Status',
			link: '/vaccines',
		},
		right: {
			text: 'India - Current Status',
			link: '/detailsIndia',
		},
	},
	vaccines: {
		left: {
			text: 'Home',
			link: '/',
		},
		right: {
			text: 'USA - Current Status',
			link: '/detailsUsa',
		},
		center: {
			text: 'India - Current Status',
			link: '/detailsIndia',
		},
	},
};

export default menuConfig;
