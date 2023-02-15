const hourlyContainer = document.getElementById("weather-info-hourly");

const setHourlyUILoading = () => {
	hourlyContainer.innerText = "Loading...";
};

const updateHourlyUI = (data) => {
	console.log(data.hourly);
	hourlyContainer.innerText = "Carousel coming soon...";
};
