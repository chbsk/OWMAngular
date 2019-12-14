const fetch = require('node-fetch');
const express = require('express');

const response = fetch('data.json')
.then(() => {
	const mJson = response.json();
})
.then(() => {
	console.log(JSON.stringify(myJson));
})
.catch(() => {
	console.log("Failed");
});

var app = express();

app.listen(4000, () => console.log('Test running'));