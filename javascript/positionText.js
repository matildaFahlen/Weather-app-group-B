const locationText = document.querySelector(".current-location");
const chosenLocationText = document.querySelector(".chosen-location");

if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(successFunction);
}

function successFunction(position) {
	const lat = position.coords.latitude;
	const long = position.coords.longitude;

	const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`;

	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			const city = data.city;
			const locality = data.locality;
			const countryName = data.countryName;
			const formattedLocality = locality.replace("city district", "");
			locationText.innerHTML = formattedLocality;
			chosenLocationText.innerHTML = `${city}, ${countryName}`;
		});
}
