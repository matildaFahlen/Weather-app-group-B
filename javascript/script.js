const startDate = undefined;
const endDate = undefined;




setWeekUILoading();
setTodayUILoading();
setHourlyUILoading();

fetchLocation().then((locationData) => {
if(submit) {
	submit.addEventListener("click", () => {
		const currentVal = search.value;

		getSearchedLocation(currentVal).then((data) => {
			const latitude  = data.results[0].latitude;
			const longitude = data.results[0].longitude;
			
			
			fetchForecast(longitude, latitude, startDate, endDate).then((forecastData) => {
				updateWeekUI(forecastData);
				updateTodayUI(forecastData);
				updateHourlyUI(forecastData);
				setWeatherCodeUI(forecastData);
				updateCurrentTemp(forecastData);
				updateCurrentTempSearched(data);
			});
		})
	})
} 

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
