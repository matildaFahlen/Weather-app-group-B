const startDate = undefined;
const endDate = undefined;

setWeekUILoading();
setTodayUILoading();
setHourlyUILoading();

fetchLocation().then((data) => {
	const longitude = data.coords.longitude;
	const latitude = data.coords.latitude;
	fetchForecast(longitude, latitude, startDate, endDate).then((data) => {
		updateWeekUI(data);
		updateTodayUI(data);
		updateHourlyUI(data);
	});
});
