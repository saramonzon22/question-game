const getData = () => {
    return fetch('https://restcountries.com/v3.1/all')
        .then((response) => response.json())
        .then((data) => {

            const countryClean = data.map((country, index) => {
                return {
                    id: index,
                    name: country.name,
                    languages: country.languages,
                    capital: country.capital,
                    currencies: country.currencies,
                    region: country.region,
                    flags: country.flags,

                };

            });
            console.log(countryClean)
            return countryClean;
        });
}

export default getData();