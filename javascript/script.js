const startDate = undefined;
const endDate = undefined;

setUILoading();
fetchLocation()
	.then((locationData) => {
		const longitude = locationData.coords.longitude;
		const latitude = locationData.coords.latitude;
		fetchForecast(longitude, latitude, startDate, endDate);
	})
	.catch((err) => {
		console.error(err);
		setLocationError();
	});

const submitForm = document.getElementById("submitForm");

submitForm.onsubmit = (e) => {
	e.preventDefault();
	const search = document.querySelector(".search-bar");
	const currentVal = search.value;
	getSearchedLocation(currentVal)
		.then((data) => {
			const sortedResults = data?.results?.sort((a, b) => a.name?.length - b.name?.length);
			const result = sortedResults?.find((result) => result.name && result.country);
			if (result) {
				const latitude = result.latitude;
				const longitude = result.longitude;
				fetchForecast(longitude, latitude, startDate, endDate);
				updateCurrentTempSearched(result);
			} else {
				errorPopupMessage(`No match for "${currentVal}"`);
			}
		})
		.catch((err) => {
			console.error(err);
		});
};
