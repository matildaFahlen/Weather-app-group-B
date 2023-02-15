// fetchLocation är en funktion som returnerar ett promise.
// Promiset kommer resolvas (dvs. .then-funktionen kommer kallas)
// om navigator.geolocation.getCurrentPosition lyckas returnera location-data
// annars kommer Promiset rejecta och en eventuell .catch kommer köras.

function fetchLocation() {
	return new Promise((resolve, reject) =>
		navigator.geolocation.getCurrentPosition(resolve, reject)
	);
}
