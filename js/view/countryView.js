// this view renders the detailed page for a single country

// render country detail page... single country object from api
function render(country) {
    const container = document.querySelector('#container');
    container.innerHTML = ''; // clear previous content

    // extract country data
    const name = country.name.common;
    const nativeName = getNativeName(country.name.nativeName);
    const flag = country.flags.svg || country.flags.png;
    const population = country.population.toLocaleString();
    const region = country.region;
    const capital = country.capital ? country.capital[0] : 'N/A';
    const currencies = getCurrencies(country.currencies);
    const languages = getLanguages(country.languages);

    // create detail container
    const detailDiv = document.createElement('div');
    detailDiv.className = 'detail-container';

    // html structure
    detailDiv.innerHTML = `
        <div class="row">
            <!-- Left side: Flag -->
            <div class="col-md-6">
                <img src="${flag}" alt="${name} flag" class="detail-flag">
            </div>
            
            <!-- Right side: Information -->
            <div class="col-md-6">
                <h1 class="mb-4">${name}</h1>
                
                <div class="row mb-4">
                    <div class="col-md-6">
                        <p><strong>Native Name:</strong> ${nativeName}</p>
                        <p><strong>Population:</strong> ${population}</p>
                        <p><strong>Region:</strong> ${region}</p>
                        <p><strong>Capital:</strong> ${capital}</p>
                    </div>
                    <div class="col-md-6">
                        <p><strong>Currencies:</strong> ${currencies}</p>
                        <p><strong>Languages:</strong> ${languages}</p>
                    </div>
                </div>
                
                <div class="mt-4">
                    <a href="/" class="btn btn-secondary">← Back to Home</a>
                </div>
            </div>
        </div>
    `;

    container.appendChild(detailDiv);

}

// get native name from nativeName object
function getNativeName(nativeNameObj) {
    if (!nativeNameObj) return 'N/A';

    // get first native name available
    const firstKey = Object.keys(nativeNameObj)[0];
    return nativeNameObj[firstKey]?.common || 'N/A';
}

// format currencies into readable string
function getCurrencies(currenciesObj) {
    if (!currenciesObj) return 'N/A';

    // extract currency names and join them
    const currencyNames = Object.values(currenciesObj)
        .map(currency => currency.name)
        .join(', ');

    return currencyNames || 'N/A';
}

// format languages into readable string
function getLanguages(languagesObj) {
    if (!languagesObj) return 'N/A';

    // extract language names and join them
    const languageNames = Object.values(languagesObj).join(', ');

    return languageNames || 'N/A';
}

export default { render };