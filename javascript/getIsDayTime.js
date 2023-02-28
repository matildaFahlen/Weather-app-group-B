const getIsdayTime = (forecastData) => {
	const now = new Date();
	let hour = now.getHours();
	let minutes = now.getMinutes();
	let time = hour + ":" + minutes;
	const sunset = forecastData.daily.sunset[0]; // To get moon-image if sun is down
	const sunrise = forecastData.daily.sunrise[0];
	return sunrise.slice(11) < time && time < sunset.slice(11);
};
