const paisJS = document.querySelector('.pais-name');
const mainHTML = document.querySelector('.main-countries')

fetch('https://restcountries.com/v3.1/all')
    .then((response) => response.json())
    .then((data) => {

        const countryClean = data.map((country, index) => {
            return {
                id: index,
                name: country.name,
                fullText: country.fullText,
                languages: country.languages,
                capital: country.capital,
                region: country.region,
                flags: country.flags,

            };

        });
        console.log(countryClean)
        return countryClean;
    });


let countries = [];

const renderCountries = (countriesArray) => {
    let html = []
    for (const country of countriesArray) {
        html += `<h1 class="${country.name}" id="${index}"></h1>`;
    }
}

const countriesSearch = () => {
    let html = countriesRender(countries);
    mainHTML.innerHTML = html;

};