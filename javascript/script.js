const startDate = undefined;
const endDate = undefined;




setUILoading();
fetchLocation()
	.then((locationData) => { 

		if(submit) {
			submit.addEventListener("click", () => {
				const currentVal = search.value;
				getSearchedLocation(currentVal).then((data) => {
					const latitude  = data.results[0].latitude;
					const longitude = data.results[0].longitude;
					fetchForecast(longitude, latitude, startDate, endDate);
					updateForeCastUI();
				})
			})
		}
		const longitude = locationData.coords.longitude;
		const latitude = locationData.coords.latitude;
		fetchForecast(longitude, latitude, startDate, endDate);
			
	})
	
	// .catch((err) => {
	// 	console.error(err);
	// 	setLocationError();
	// });
