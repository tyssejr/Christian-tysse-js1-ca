const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let ID;

if (params.has("id")) {
    ID = params.get("id");
}

const detailsUrl = `https://rickandmortyapi.com/api/character/${ID}`;

fetch(detailsUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        getDetails(json);
    })
    .catch(function (error) {
        console.log(error);
    });

function getDetails(json) {
    const imageClass = document.querySelector(".details-image");
    imageClass.src = json.image;
    imageClass.alt = json.name;

    const name = document.querySelector("h1");
    name.innerHTML = json.name;

    const status = document.querySelector("#status");
    status.innerHTML = json.status;

    const species = document.querySelector("#species");
    species.innerHTML = json.species;

    const origin = document.querySelector("#origin");
    origin.innerHTML = json.origin.name;

    const location = document.querySelector("#location");
    location.innerHTML = json.location.name;

    document.title = json.name;
}