const weekContainer = document.getElementById("weather-info-week");

const setWeekUILoading = () => {
	weekContainer.innerText = "Loading...";
};

const setWeekUIError = () => {
	weekContainer.innerText = "";
	const rowElement = document.createElement("tr");
	const cellElement = document.createElement("td");
	cellElement.classList.add("week-error-message");
	cellElement.innerText = "Could not retrieve weather information, please try again.";
	rowElement.append(cellElement);
	weekContainer.append(rowElement);
};

const updateWeekUI = (forecastData) => {
	weekContainer.innerText = "";
	const tableBody = document.createElement("tbody");

	for (let i = 0; i < forecastData.daily.time.length; i++) {
		const date = forecastData.daily.time[i];
		const min = forecastData.daily.temperature_2m_min[i];
		const max = forecastData.daily.temperature_2m_max[i];
		const precipitation = forecastData.daily.precipitation_sum[i];

		const listElement = document.createElement("tr");
		listElement.classList.add("week-forcast-today");

		const dateElement = document.createElement("td");
		listElement.classList.add("weekday");
		dateElement.innerText =
			i === 0
				? "Today"
				: new Date(date).toLocaleDateString("en", {
						weekday: "long",
				  });
		listElement.append(dateElement);

		const minElement = document.createElement("td");
		minElement.classList.add("min-temp");
		minElement.innerText = `${min.toFixed(0)}°`;
		listElement.append(minElement);

		const maxElement = document.createElement("td");
		maxElement.classList.add("max-temp");
		maxElement.innerText = `${max.toFixed(0)}°`;
		listElement.append(maxElement);

		const iconCell = document.createElement("td");
		iconCell.classList.add("weather-icon");
		const iconImage = document.createElement("img");
		iconImage.classList.add("week-weather-icon");
		const weatherIcon = forecastData.daily.weathercode[i];
		console.log(weatherIcon);
		iconImage.src = getWheatherIconUrl(weatherIcon);
		iconCell.append(iconImage);
		listElement.append(iconCell);

		const precipitationElement = document.createElement("td");
		precipitationElement.classList.add("precipitation");
		precipitationElement.innerText = `${precipitation.toFixed(1)}mm`;
		listElement.append(precipitationElement);

		tableBody.append(listElement);
	}

	weekContainer.append(tableBody);
};
