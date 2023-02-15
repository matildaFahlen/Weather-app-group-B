const startDate = undefined;
const endDate = undefined;

setWeekUILoading();
setTodayUILoading();
setHourlyUILoading();

fetchLocation().then((locationData) => {
	const longitude = locationData.coords.longitude;
	const latitude = locationData.coords.latitude;
	fetchForecast(longitude, latitude, startDate, endDate).then((forecastData) => {
		updateWeekUI(forecastData);
		updateTodayUI(forecastData);
		updateHourlyUI(forecastData);
		setWeatherCodeUI(forecastData);
		updateCurrentTemp(forecastData);
	});
});
