const tempContainer = document.getElementById("current-temp-section");

const updateCurrentTemp = (forecastData) => {
	const now = new Date();
	let hour = now.getHours();
	const tempElement = tempContainer.getElementsByClassName("current-temp")[0];
	const currentTemp = forecastData.hourly.temperature_2m[hour];
	tempElement.innerText = `${currentTemp}°`;
};
