console.log("HI!")

const header = document.querySelector("#loading");
const section1Para = document.querySelector("#content");
const description = document.querySelector("#description");
const flag = document.querySelector("#flag");

function getCountryByName(countryName) {
    // const section1 = document.querySelector("#body__firstSection");
    // const newObject = document.createElement("p");
    const fetchCountry = fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    fetchCountry.then(response => {
        if (response.ok) {
            header.innerHTML = "Loading...";
            return response.json();
        }
        header.innerHTML = "Couldn't find " + countryName;
        throw new Error("Couldn't find country " + countryName);
    })
    .then(data => {
        section1Para.innerHTML ="";
        description.innerHTML = data[0].name.common;
        description.innerHTML += "<br></br>" + "Population: " + data[0].population;
        flag.innerHTML = data[0].flag;
        console.log(data);
        // wait(1000);
        header.innerHTML = "Loaded.";
    }) 
    // section1.appendChild(newObject);
}


function getAllCountries() {
    // const section1 = document.querySelector("#body__firstSection");
    // const newObject = document.createElement("p");
    const fetchCountry = fetch(`https://restcountries.com/v3.1/all`);
    fetchCountry.then(response => {
        header.innerHTML = "Loading...";
        return response.json();
    })
    .then(data => {
        section1Para.innerHTML = "";
        data.forEach(country => {
            section1Para.innerHTML += country.name.common;
            section1Para.innerHTML += "<br></br>" + "Population: " + country.population + "<br></br><br></br>";
            console.log(country);
            header.innerHTML = "Loaded.";
        })
    }) 
    // section1.appendChild(newObject);
}

const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
    getCountryByName(event.target["country"].value);
    event.preventDefault();
});


function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

document.addEventListener('DOMContentLoaded', () => {
    header.innerHTML = "Loaded.";
    getAllCountries();
});