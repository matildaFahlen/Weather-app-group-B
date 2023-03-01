const padDigit = (digit) => (Number(digit) < 10 ? `0${digit}` : digit);

/**
 * Tar in forecastData och time (en tids-sträng, t.ex. "09:34")
 * och returnerar om tiden är på dagen (true) eller natten (false)
 *
 * Om man inte stoppar in någon tid kollar den hur mycket klockan är nu
 */
const getIsdayTime = (forecastData, time) => {
	if (!time) {
		const now = new Date();
		let hour = now.getHours();
		let minutes = now.getMinutes();
		time = padDigit(hour) + ":" + padDigit(minutes);
	}
	console.log(time);
	const sunset = forecastData.daily.sunset[0]; // To get moon-image if sun is down
	const sunrise = forecastData.daily.sunrise[0];
	return sunrise.slice(11) < time && time < sunset.slice(11);
};
