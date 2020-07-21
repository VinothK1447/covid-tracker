const path = require('path');
const express = require('express');
const dotenv = require('dotenv');

dotenv.config({
	path: './config/config.env',
});

const PORT = process.env.PORT || 5000;
const log = console.log;

const app = express();
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, './client/build/index.html'));
	});
}

app.listen(PORT, () => {
	log(`Server started in ${process.env.NODE_ENV} mode at port ${PORT}`);
});
