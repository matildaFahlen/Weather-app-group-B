const hourlyContainer = document.getElementById("weather-info-hourly");

const setHourlyUILoading = () => {
	hourlyContainer.innerText = "Loading...";
};

const updateHourlyUI = (forecastData) => {
	console.log(forecastData);
	hourlyContainer.innerText = "Carousel coming soon...";
};