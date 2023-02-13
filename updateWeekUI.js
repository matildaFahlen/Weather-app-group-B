const weekContainer = document.getElementById("weather-info-week");

const setWeekUILoading = () => {
	weekContainer.innerText = "Loading...";
};

const updateWeekUI = (data) => {
	weekContainer.innerText = "";

	for (let i = 0; i < data.daily.time.length; i++) {
		const date = data.daily.time[i];
		const min = data.daily.temperature_2m_min[i];
		const max = data.daily.temperature_2m_max[i];
		const precipitation = data.daily.precipitation_sum[i];

		const listElement = document.createElement("ul");
		listElement.classList.add("week-forcast-today");

		const dateElement = document.createElement("li");
		listElement.classList.add("weekday");
		dateElement.innerText =
			i === 0
				? "Today"
				: new Date(date).toLocaleDateString("en", {
						weekday: "long",
				  });
		listElement.append(dateElement);

		const minElement = document.createElement("li");
		minElement.classList.add("min-temp");
		minElement.innerText = `${min}°`;
		listElement.append(minElement);

		const maxElement = document.createElement("li");
		maxElement.classList.add("max-temp");
		maxElement.innerText = `${max}°`;
		listElement.append(maxElement);

		const iconContainer = document.createElement("li");
		iconContainer.classList.add("weather-icon");
		const iconElement = document.createElement("i");
		iconElement.classList.add("fa-solid", "fa-sun");
		iconContainer.append(iconElement);
		listElement.append(iconContainer);

		const precipitationElement = document.createElement("li");
		precipitationElement.classList.add("precipitation");
		precipitationElement.innerText = `${precipitation.toFixed(1)}mm`;
		listElement.append(precipitationElement);

		weekContainer.append(listElement);
	}
};
