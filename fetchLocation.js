function fetchLocation(options) {
	return new Promise((resolve, reject) =>
		navigator.geolocation.getCurrentPosition(resolve, reject, options)
	);
}
