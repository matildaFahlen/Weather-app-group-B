const fetchForecast = (longitude, latitude, startDate, endDate) => {
	const paramsObj = {
		longitude,
		latitude,
		start_date: startDate,
		end_date: endDate,
		hourly: "temperature_2m",
		daily: "temperature_2m_max",
		timezone: "Europe/Berlin",
	};

	const searchParams = new URLSearchParams(paramsObj);
	if (!startDate || !endDate) {
		searchParams.delete("start_date");
		searchParams.delete("end_date");
	}

	searchParams.append("hourly", "rain");
	searchParams.append("hourly", "snowfall");
	searchParams.append("daily", "temperature_2m_min");
	searchParams.append("daily", "sunrise");
	searchParams.append("daily", "sunset");
	searchParams.append("daily", "precipitation_sum");

	const baseUrl = "https://api.open-meteo.com/v1/forecast";

	const url = `${baseUrl}?${searchParams.toString()}`;

	return fetch(url).then((res) => res.json());
};
