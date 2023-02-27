const fetchForecast = (longitude, latitude) => {
	const paramsObj = {
		longitude,
		latitude,
		start_date: startDate,
		end_date: endDate,
		hourly: "temperature_2m",
		daily: "temperature_2m_max",
		timezone: "auto",
	};

	const searchParams = new URLSearchParams(paramsObj);
	if (!startDate || !endDate) {
		searchParams.delete("start_date");
		searchParams.delete("end_date");
	}

	searchParams.append("hourly", "rain");
	searchParams.append("hourly", "snowfall");
	searchParams.append("hourly", "weathercode");
	searchParams.append("hourly", "precipitation");
	searchParams.append("hourly", "windspeed_10m");
	searchParams.append("hourly", "winddirection_10m");
	searchParams.append("daily", "temperature_2m_min");
	searchParams.append("daily", "sunrise");
	searchParams.append("daily", "sunset");
	searchParams.append("daily", "precipitation_sum");
	searchParams.append("daily", "weathercode");

	const baseUrl = "https://api.open-meteo.com/v1/forecast";
	const url = `${baseUrl}?${searchParams.toString()}`;

	// Set loading state
	setUILoading();
	// Fetch data
	fetch(url)
		.then((res) => {
			if (res.status === 200) {
				return res.json();
			} else {
				throw Error("error fetching data");
			}
		})
		.then((forecastData) => {
			// Update UI with data
			updateForeCastUI(forecastData);
		})
		.catch((err) => {
			console.error(err);
			// Update UI with error
			setUIError();
		});
};
