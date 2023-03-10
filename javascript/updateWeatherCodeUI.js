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
		icon: "starry-night",
	},
	{
		id: -3,
		description: "Partly cloudy night",
		icon: "partly-cloudy-night",
	},
	{
		id: -4,
		description: "Fog night",
		icon: "fog-night",
	},
];

const setWeatherCodeLoading = () => {
	weatherImage.src = getWheatherIconUrl(-1);
};

const setWeatherCodeError = () => {
	weatherImage.src = getWheatherIconUrl(404);
};

/**
 * Tar in en v??derkod och om man ska visa dags-ikoner eller natt-ikoner
 * (om man inte stoppar in isDayTime blir det automatiskt dags-ikoner)
 */
const getWheatherIconUrl = (weatherCode, isDayTime = true) => {
	if (!isDayTime) {
		if (weatherCode === 0) {
			weatherCode = -2;
		}
		if (weatherCode === 1 || weatherCode === 2) {
			weatherCode = -3;
		}
		if (weatherCode === 45 || weatherCode === 48) {
			weatherCode = -4;
		}
	}
	const icon = weatherCodes.find((code) => code.id === weatherCode).icon;
	return `https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/${icon}.svg`;
};

const setWeatherCodeUI = (forecastData) => {
	const now = new Date();
	let hour = now.getHours();
	let weatherCode = forecastData.hourly.weathercode[hour];
	const isDayTime = getIsdayTime(forecastData);
	weatherImage.src = getWheatherIconUrl(weatherCode, isDayTime);
};
