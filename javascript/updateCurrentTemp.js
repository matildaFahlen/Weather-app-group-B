const tempContainer = document.getElementById("current-temp-section");
const locationOutput1 = document.querySelector(".current-location");
const locationOutput2 = document.querySelector(".chosen-location");


const updateCurrentTemp = (forecastData) => {
	const now = new Date();
	let hour = now.getHours();
	const tempElement = tempContainer.getElementsByClassName("current-temp")[0];
	const currentTemp = forecastData.hourly.temperature_2m[hour];
	tempElement.innerText = `${currentTemp}°`;
};

const updateCurrentTempSearched = (data) => {
	const currentLocation = data.results[0].name;
	const currentCity = data.results[0].name;
	const currentCountry = data.results[0].country;
	locationOutput1.innerHTML = ` ${currentLocation}`;
	locationOutput2.innerHTML = ` ${currentCity}, ${currentCountry}`;
};
