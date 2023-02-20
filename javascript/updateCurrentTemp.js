const tempContainer = document.getElementById("current-temp-section");
const locationOutput1 = document.querySelector(".current-location");
const locationOutput2 = document.querySelector(".chosen-location");

const setCurrentTempLoading = () => {
	const tempElement = tempContainer.getElementsByClassName("current-temp")[0];
	tempElement.innerText = `Loading...`;
};

const setCurrentTempError = () => {
	const tempElement = tempContainer.getElementsByClassName("current-temp")[0];
	tempElement.innerText = `-404°`;
};

const updateCurrentTemp = (forecastData) => {
	const now = new Date();
	let hour = now.getHours();
	const tempElement = tempContainer.getElementsByClassName("current-temp")[0];
	const currentTemp = forecastData.hourly.temperature_2m[hour];
	tempElement.innerText = `${currentTemp.toFixed(0)}°`;
};

const updateCurrentTempSearched = (result) => {
	const currentLocation = result.name;
	const currentCity = result.name;
	const currentCountry = result.country;
	locationOutput1.innerHTML = ` ${currentLocation}`;
	locationOutput2.innerHTML = ` ${currentCity}, ${currentCountry}`;
};
