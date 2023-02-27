const loadCountries = async() => {
    const url = `https://restcountries.com/v3.1/all`;
    const res = await fetch(url);
    const data = await res.json();
    displayCountries(data);
};

const displayCountries = countries => {
    const countriesContainer = document.getElementById('countries-container');
    countriesContainer.innerHTML = '';
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('col');
        countryDiv.innerHTML = `
            <div class="card h-100 shadow">
                <img src="${country.flags.png}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${country.name.common}</h5>
                    <p class="card-text">Capital: ${country.capital ? country.capital[0] : 'No capital'}</p>
                </div>
            </div>
        `;
        countriesContainer.appendChild(countryDiv);
    });
    
};

const filterByRegion = () => {
    const regions = document.getElementsByClassName('region');
    for (const region of regions) {
        region.addEventListener('click', function (event) {
            const regionName = `region/${event.target.innerHTML}`;
            loadFilterCountries(regionName);
        })
    }
}

const loadFilterCountries = async regionName => {
    const url = `https://restcountries.com/v3.1/${regionName}`;
    const res = await fetch(url);
    const data = await res.json();
    displayCountries(data)
}

filterByRegion();
loadCountries();