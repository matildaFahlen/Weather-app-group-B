async function getSearchedLocation(input) {
	const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${input}`);
	const data = await res.json();
	return data;
}
