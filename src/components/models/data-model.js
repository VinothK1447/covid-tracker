import axios from 'axios';

export const getData = async (config) => {
	const data = await axios.get(config.url);
	return data.data;
};
