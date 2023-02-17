const locationText = document.querySelector('.current-location');

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction);
}

function successFunction(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=sv`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const city = data['locality'];
            const formattedCity = city.replace(' stadsdelsområde', '');
            locationText.innerHTML = formattedCity;
        });
}