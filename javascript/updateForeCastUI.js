const updateForeCastUI = (forecastData) => {
	updateWeekUI(forecastData);
	updateTodayUI(forecastData);
	updateHourlyUI(forecastData);
	setWeatherCodeUI(forecastData);
	updateCurrentTemp(forecastData);
	updateTimeStamp(forecastData);
};
