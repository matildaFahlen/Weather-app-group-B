const imageModeToggle = document.getElementById("image-mode-button");

const getSeason = () => {
	return "spring";

	const today = new Date();
	const month = today.getMonth();
	if (month === 11 || month < 2) {
		return "winter";
	}
	if (month < 5) {
		return "spring";
	}
	if (month < 8) {
		return "summer";
	}
	return "autumn";
};

imageModeToggle.addEventListener("click", () => {
	const seasonClass = getSeason();
	if (document.body.classList.contains(seasonClass)) {
		document.body.classList.remove(seasonClass);
	} else {
		document.body.classList.add(seasonClass);
	}
});
