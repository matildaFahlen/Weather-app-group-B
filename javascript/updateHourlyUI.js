const hourlyContainer = document.getElementById("weather-info-hourly");

const setHourlyUILoading = () => {
	hourlyContainer.innerText = "Loading...";
};

const setHourlyUIError = () => {
	hourlyContainer.innerText = "Could not retrieve weather information, please try again.";
};

const updateHourlyUI = (forecastData) => {
	console.log(forecastData);
	hourlyContainer.innerText = "";
	const tableBody = document.createElement("div");
	tableBody.classList.add("div-hourly");

	const startHour = new Date().getHours();

	for (let i = startHour; i < 24 + startHour; i++) {
		const time = forecastData.hourly.time[i];
		const temp = forecastData.hourly.temperature_2m[i];
		const precip = forecastData.hourly.precipitation[i];

		const listElement = document.createElement("ul");
		listElement.classList.add("hourly-forcast-ul");

		const hourElement = document.createElement("li");
		hourElement.classList.add("time-hourly");
		hourElement.innerText = `${time.slice(-5)}`;
		listElement.append(hourElement);

		const iconElement = document.createElement("li");
		iconElement.classList.add("weather-icon-hourly");
		const iconImage = document.createElement("img");
		iconImage.classList.add("hourly-weather-icon");
		const weatherIcon = forecastData.hourly.weathercode[i];
		iconImage.src = getWheatherIconUrl(weatherIcon);
		iconElement.append(iconImage);
		listElement.append(iconElement);

		const tempElement = document.createElement("li");
		tempElement.classList.add("temp-hourly");
		tempElement.innerText = `${temp.toFixed(0)}°`;
		listElement.append(tempElement);

		const precipElement = document.createElement("li");
		precipElement.classList.add("precipitation-small");
		precipElement.innerText = `${precip.toFixed(1)}mm`;
		listElement.append(precipElement);

		tableBody.append(listElement);
	}

	hourlyContainer.append(tableBody);
};
