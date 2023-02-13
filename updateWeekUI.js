const weekContainer = document.getElementById("weather-info-week");

const setWeekUILoading = () => {
	weekContainer.innerText = "Loading...";
};

const updateWeekUI = (data) => {
	weekContainer.innerText = "";
	const tableBody = document.createElement("tbody");

	for (let i = 0; i < data.daily.time.length; i++) {
		const date = data.daily.time[i];
		const min = data.daily.temperature_2m_min[i];
		const max = data.daily.temperature_2m_max[i];
		const precipitation = data.daily.precipitation_sum[i];

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
		minElement.innerText = `${min.toFixed(1)}°`;
		listElement.append(minElement);

		const maxElement = document.createElement("td");
		maxElement.classList.add("max-temp");
		maxElement.innerText = `${max.toFixed(1)}°`;
		listElement.append(maxElement);

		const iconContainer = document.createElement("td");
		iconContainer.classList.add("weather-icon");
		const iconElement = document.createElement("i");
		iconElement.classList.add("fa-solid", "fa-sun");
		iconContainer.append(iconElement);
		listElement.append(iconContainer);

		const precipitationElement = document.createElement("td");
		precipitationElement.classList.add("precipitation");
		precipitationElement.innerText = `${precipitation.toFixed(1)}mm`;
		listElement.append(precipitationElement);

		tableBody.append(listElement);
	}

	weekContainer.append(tableBody);
};
