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
		id: 52,
		description: "Drizzle",
		icon: "drizzle",
	},
	{
		id: 53,
		description: "Drizzle",
		icon: "drizzle",
	},
	{
		id: 56,
		description: "",
		icon: "",
	},
	{
		id: 57,
		description: "",
		icon: "",
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
		description: "",
		icon: "",
	},
	{
		id: 89,
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
		id: 86,
		description: "Thunderstorm with slight Hail",
		icon: "thunderstorms-rain",
	},
	{
		id: 86,
		description: "Thunderstorm with heavy Hail",
		icon: "thunderstorms-rain",
	},
];

const getWheatherIconUrl = (weatherCode) => {
	const icon = weatherCodes.find((code) => code.id === weatherCode).icon;
	return `../icons/wi_${icon}.svg`;
};
// https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/

const setWeatherCodeUI = (forecastData) => {
	const weatherIcon = forecastData.daily.weathercode[0];
	weatherImage.src = getWheatherIconUrl(weatherIcon);
};