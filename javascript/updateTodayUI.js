const todayContainer = document.getElementById("weather-info-today");

const setTodayUILoading = () => {
	const maxElement = todayContainer.getElementsByClassName("max-temp")[0];
	maxElement.innerText = `Max: Loading...`;

	const minElement = todayContainer.getElementsByClassName("min-temp")[0];
	minElement.innerText = `Min: Loading...`;

	const sunriseElement = todayContainer.getElementsByClassName("sunrise-time")[0];
	sunriseElement.innerText = "Loading...";

	const sunsetElement = todayContainer.getElementsByClassName("sunset-time")[0];
	sunsetElement.innerText = "Loading...";
};

const updateTodayUI = (forecastData) => {
	const maxElement = todayContainer.getElementsByClassName("max-temp")[0];
	const max = forecastData.daily.temperature_2m_max[0]; // Tar index noll för dagens datum.
	maxElement.innerText = `Max: ${max}°`;

	const minElement = todayContainer.getElementsByClassName("min-temp")[0];
	const min = forecastData.daily.temperature_2m_min[0];
	minElement.innerText = `Min: ${min}°`;

	const sunriseElement = todayContainer.getElementsByClassName("sunrise-time")[0];
	const sunrise = forecastData.daily.sunrise[0];
	sunriseElement.innerText = sunrise.slice(11);

	const sunsetElement = todayContainer.getElementsByClassName("sunset-time")[0];
	const sunset = forecastData.daily.sunset[0];
	sunsetElement.innerText = sunset.slice(11);
};
