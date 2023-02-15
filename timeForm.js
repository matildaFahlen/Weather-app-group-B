var buttons = document.timeForm.view;
var prev = null;
for (var i = 0; i < buttons.length; i++) {
	const todayContainer = document.getElementById("weather-info-today");
	const weekContainer = document.getElementById("weather-info-week");
	const hourlyContainer = document.getElementById("weather-info-hourly");

	buttons[i].addEventListener("change", function () {
		if (this !== prev) {
			prev = this;
		}
		switch (prev.id) {
			case "radioToday":
				todayContainer.classList.remove("hidden");
				weekContainer.classList.add("hidden");
				hourlyContainer.classList.add("hidden");
				break;
			case "radioWeek":
				weekContainer.classList.remove("hidden");
				todayContainer.classList.add("hidden");
				hourlyContainer.classList.add("hidden");
				break;
			case "radioHour":
				hourlyContainer.classList.remove("hidden");
				todayContainer.classList.add("hidden");
				weekContainer.classList.add("hidden");
				break;
		}
	});
}
