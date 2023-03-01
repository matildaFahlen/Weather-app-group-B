const hourlyContainer = document.getElementById("weather-info-hourly");

const setHourlyUILoading = () => {
	hourlyContainer.innerText = "Loading...";
};

const setHourlyUIError = () => {
	hourlyContainer.innerText = "Could not retrieve weather information, please try again.";
};

const updateHourlyUI = (forecastData) => {
	hourlyContainer.innerText = "";
	const tableBody = document.createElement("div");
	tableBody.classList.add("div-hourly");

	const startHour = new Date().getHours();

	let labels = [];
	let temps = [];

	for (let i = startHour; i < 24 + startHour; i++) {
		const time = forecastData.hourly.time[i].slice(-5);
		const temp = forecastData.hourly.temperature_2m[i];
		const precip = forecastData.hourly.precipitation[i];
		const windSpeed = forecastData.hourly.windspeed_10m[i];
		const windDirection = forecastData.hourly.winddirection_10m[i];

		labels.push(time);
		temps.push(temp);

		const listElement = document.createElement("ul");
		listElement.classList.add("hourly-forcast-ul");

		const hourElement = document.createElement("li");
		hourElement.classList.add("time-hourly");
		hourElement.innerText = time;
		listElement.append(hourElement);

		const iconElement = document.createElement("li");
		iconElement.classList.add("weather-icon-hourly");
		const iconImage = document.createElement("img");
		iconImage.classList.add("hourly-weather-icon");
		const weatherIcon = forecastData.hourly.weathercode[i];
		const isDayTime = getIsdayTime(forecastData, time);
		iconImage.src = getWheatherIconUrl(weatherIcon, isDayTime);
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

		const directionElement = document.createElement("li");
		directionElement.innerHTML = `<i class="fa-solid fa-arrow-up wind-direction"></i>`;
		directionElement.style.transform = `rotate(${windDirection}deg)`;
		listElement.append(directionElement);

		const windElement = document.createElement("li");
		windElement.classList.add("wind-hourly");
		windElement.innerHTML = `${(windSpeed / 3.6).toFixed(1)}m/s`;
		listElement.append(windElement);

		tableBody.append(listElement);
	}

	const canvasContainer = document.createElement("div");
	canvasContainer.classList.add("canvas-container");
	canvasContainer.style.width = "475%";

	const canvas = document.createElement("canvas");
	canvas.setAttribute("id", "temperature-chart");
	canvasContainer.append(canvas);
	canvas.height = 40;

	function updateChartContainerWidth() {
		const screenWidth = window.innerWidth;
		if (screenWidth >= 1024) {
			canvasContainer.style.width = "475%";
		} else {
			canvasContainer.style.width = "475%";
		}
	}

	updateChartContainerWidth();
	window.addEventListener("resize", updateChartContainerWidth);

	const data = {
		labels: labels,
		datasets: [
			{
				label: "Temperature",
				data: temps,
				fill: false,
				borderColor: "rgb(75, 192, 192)",
				tension: 0.1,
			},
		],
	};

	const config = {
		type: "line",
		data: data,
		options: {
			scales: {
				y: {
					ticks: {
						beginAtZero: true,
						stepSize: 1,
					},
				},
				x: {
					title: {},
					grid: {
						display: false,
					},
					ticks: {
						stepSize: 10,
						autoSkip: false,
					},
					tickWidth: 1,
				},
			},
		},
	};

	new Chart(canvas, config);

	hourlyContainer.append(tableBody);
	hourlyContainer.append(canvasContainer);
};
