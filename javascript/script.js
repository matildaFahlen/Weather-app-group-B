const startDate = undefined;
const endDate = undefined;

setWeekUILoading();
setTodayUILoading();
setHourlyUILoading();
setWeatherCodeLoading();
setCurrentTempLoading();
setTimeStampLoading();

fetchLocation()
	.then((locationData) => {
		const longitude = locationData.coords.longitude;
		const latitude = locationData.coords.latitude;
		fetchForecast(longitude, latitude, startDate, endDate)
			.then((forecastData) => {
				updateWeekUI(forecastData);
				updateTodayUI(forecastData);
				updateHourlyUI(forecastData);
				setWeatherCodeUI(forecastData);
				updateCurrentTemp(forecastData);
				updateTimeStamp(forecastData);
			})
			.catch((err) => {
				console.error(err);
				setCurrentTempError();
				setHourlyUIError();
				setTodayUIError();
				setWeatherCodeError();
				setWeekUIError();
				setTimeStampError();
			});
	})
	.catch((err) => {
		console.error(err);
		console.log("we get here?");
		const image = document.createElement("img");
		image.classList.add("trolling");
		image.src = "https://media.tenor.com/FseuxhCywF4AAAAC/frodo-keep-your-secrets.gif";
		document.body.append(image);
	});
