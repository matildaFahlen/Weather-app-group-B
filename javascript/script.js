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

if (submit) {
	submit.addEventListener("click", () => {
		const currentVal = search.value;
		getSearchedLocation(currentVal)
			.then((data) => {
				if (data.results) {
					const noMatchElement = document.getElementById("no-match");
					noMatchElement.innerText = "";
					const latitude = data.results[0].latitude;
					const longitude = data.results[0].longitude;
					fetchForecast(longitude, latitude, startDate, endDate);
					updateCurrentTempSearched(data);
				} else {
					const noMatchElement = document.getElementById("no-match");
					noMatchElement.innerText = `No match for "${currentVal}"`;
				}
			})
			.catch((err) => {
				console.error(err);
				console.log("Do we get here");
			});
	});
}

var input = document.getElementById("myInput");

if (input) {
	input.addEventListener("keypress", function (event) {
		if (event.key === "Enter") {
			event.preventDefault();
			document.getElementById("submit").click();
		}
	});
}
