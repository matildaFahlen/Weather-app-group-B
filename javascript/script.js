const startDate = undefined;
const endDate = undefined;

setUILoading();

fetchLocation()
	.then((locationData) => {
		const longitude = locationData.coords.longitude;
		const latitude = locationData.coords.latitude;
		fetchForecast(longitude, latitude, startDate, endDate)
			.then(updateForeCastUI)
			.catch((err) => {
				console.error(err);
				setUIError();
			});
	})
	.catch((err) => {
		console.error(err);
		setLocationError();
	});
