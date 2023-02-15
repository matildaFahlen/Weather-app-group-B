const tempContainer = document.getElementById("current-temp-section");
const locationContainer = document.querySelector(".current-location");

const updateCurrentTemp = (forecastData, data) => {
	const now = new Date();
	let hour = now.getHours();
	const tempElement = tempContainer.getElementsByClassName("current-temp")[0];
	const currentTemp = forecastData.hourly.temperature_2m[hour];
	tempElement.innerText = `${currentTemp}°`;
	// const currentLocation = data.results[0].name;
	// locationContainer.innerHTML = `${currentLocation}`
};
