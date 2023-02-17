const locationText = document.querySelector('.current-location');
const locationTextBig = document.querySelector('.chosen-location')

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction);
}

function successFunction(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const locality = data['locality'];
            const city = data['city'];
            const country = data['countryName'];
            const formattedlocality = locality.replace(' district', '');
            locationText.innerHTML = formattedlocality;
            locationTextBig.innerHTML = formattedlocality + ', ' + city + ', ' + country;

        });
}