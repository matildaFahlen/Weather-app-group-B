const weatherImage = document.getElementById("weather-code");

weatherCodes = [
	{
		id: 0,
		description: "Clear day",
		icon: "clear-day",
	},
	{
		id: 1,
		description: "Mainly clear",
		icon: "partly-cloudy-day",
	},
	{
		id: 2,
		description: "Partly cloudy",
		icon: "partly-cloudy-day",
	},
	{
		id: 3,
		description: "Overcast",
		icon: "overcast",
	},
	{
		id: 45,
		description: "Fog",
		icon: "fog-day",
	},
	{
		id: 48,
		description: "Depositing rime fog",
		icon: "fog-day",
	},
	{
		id: 51,
		description: "Drizzle",
		icon: "drizzle",
	},
	{
		id: 53,
		description: "Drizzle",
		icon: "drizzle",
	},
	{
		id: 55,
		description: "Drizzle",
		icon: "drizzle",
	},
	{
		id: 55,
		description: "Drizzle",
		icon: "drizzle",
	},
	{
		id: 56,
		description: "Freezing drizzle",
		icon: "sleet",
	},
	{
		id: 57,
		description: "Freexing drizzle",
		icon: "sleet",
	},
	{
		id: 61,
		description: "Slight",
		icon: "rain",
	},
	{
		id: 63,
		description: "Moderate",
		icon: "rain",
	},
	{
		id: 65,
		description: "Heavy intensity",
		icon: "rain",
	},
	{
		id: 66,
		description: "Freezing Rain",
		icon: "sleet",
	},
	{
		id: 67,
		description: "Freezing Rain",
		icon: "sleet",
	},
	{
		id: 71,
		description: "Slight",
		icon: "snow",
	},
	{
		id: 73,
		description: "Moderate",
		icon: "snow",
	},
	{
		id: 75,
		description: "Heavy intensity",
		icon: "snow",
	},
	{
		id: 77,
		description: "Snow Grains",
		icon: "snow",
	},
	{
		id: 80,
		description: "Slight",
		icon: "rain",
	},
	{
		id: 81,
		description: "Moderate",
		icon: "rain",
	},
	{
		id: 82,
		description: "Heavy intensity",
		icon: "rain",
	},
	{
		id: 85,
		description: "Slight",
		icon: "snow",
	},
	{
		id: 86,
		description: "Heavy",
		icon: "snow",
	},

	{
		id: 95,
		description: "Thunderstorm",
		icon: "thunderstorms",
	},
	{
		id: 96,
		description: "Thunderstorm with slight Hail",
		icon: "thunderstorms-rain",
	},
	{
		id: 99,
		description: "Thunderstorm with heavy Hail",
		icon: "thunderstorms-rain",
	},

	{
		id: 404,
		description: "Error icon",
		icon: "thunderstorms-night-extreme-snow",
	},
	{
		id: -1,
		description: "Loading icon",
		icon: "rainbow-clear",
	},
	{
		id: -2,
		descriptio: "Clear night moon with stars",
		icon: "starry-night"
	}
];

const setWeatherCodeLoading = () => {
	weatherImage.src = getWheatherIconUrl(-1);
};

const setWeatherCodeError = () => {
	weatherImage.src = getWheatherIconUrl(404);
};

const getWheatherIconUrl = (weatherCode) => {
	const icon = weatherCodes.find((code) => code.id === weatherCode).icon;
	return `https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/${icon}.svg`;
};

const setWeatherCodeUI = (forecastData) => {
	const now = new Date();
	let hour = now.getHours();
	let minutes = now.getMinutes();
	let time = hour + ":" + minutes;
	const weatherCode = forecastData.hourly.weathercode[hour];
	const sunset = forecastData.daily.sunset[0]; // To get moon-image if sun is down 
	const sunrise = forecastData.daily.sunrise[0];
	if (sunrise.slice(11) < time && time < sunset.slice(11)) { 
		weatherImage.src = getWheatherIconUrl(weatherCode);
	}
	else if (sunset.slice(11) < time && weatherCode === 0) {
		weatherImage.src = getWheatherIconUrl(-2);
	}
	else {
		weatherImage.src = getWheatherIconUrl(weatherCode);
	}
};