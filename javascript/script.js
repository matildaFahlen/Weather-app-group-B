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
const search = document.querySelector(".search-bar");

submitForm.onsubmit = (e) => {
	e.preventDefault();
	const currentVal = search.value;
	getSearchedLocation(currentVal)
		.then((data) => {
			const result = data?.results?.find((result) => result.name && result.country);
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

search.addEventListener("input", () => {
	const currentVal = search.value;
	if (currentVal.length > 0) {
		getSearchedLocation(currentVal)
			.then((data) => {
				const results = data?.results?.filter((result) => result.name && result.country);
				console.log(results?.[0]?.timezone);
				if (data && data.results && data.results.length > 0) {
					updateSearchOptionsUI(results);
				} else {
					outputDiv.innerHTML = "";
				}
			})
			.catch((err) => {
				console.error(err);
			});
	} else {
		outputDiv.innerHTML = "";
	}
});
