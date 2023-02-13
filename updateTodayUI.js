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

const updateTodayUI = (data) => {
	const maxElement = todayContainer.getElementsByClassName("max-temp")[0];
	const max = data.daily.temperature_2m_max[0];
	maxElement.innerText = `Max: ${max}°`;

	const minElement = todayContainer.getElementsByClassName("min-temp")[0];
	const min = data.daily.temperature_2m_min[0];
	minElement.innerText = `Min: ${min}°`;

	const sunriseElement = todayContainer.getElementsByClassName("sunrise-time")[0];
	const sunrise = data.daily.sunrise[0];
	sunriseElement.innerText = sunrise.slice(11);

	const sunsetElement = todayContainer.getElementsByClassName("sunset-time")[0];
	const sunset = data.daily.sunset[0];
	sunsetElement.innerText = sunset.slice(11);
};
