const search = document.querySelector(".search-bar");
const submit = document.querySelector("#submit");

async function getSearchedLocation(input) {
    const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${input}`)
    const data = await res.json()
    console.log( data)
    return data;
}

// är det api parametrarna so mgör att det är samma tidszon hela tiden?
// 

