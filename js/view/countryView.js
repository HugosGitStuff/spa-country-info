// countryView.js
// This view renders the detailed page for a single country

/**
 * Render country detail page
 * @param {Object} country - Single country object from API
 */
function render(country) {
    const container = document.querySelector('#container');
    container.innerHTML = ''; // Clear previous content
    
    // Extract country data
    const name = country.name.common;
    const nativeName = getNativeName(country.name.nativeName);
    const flag = country.flags.svg || country.flags.png;
    const population = country.population.toLocaleString();
    const region = country.region;
    const capital = country.capital ? country.capital[0] : 'N/A';
    const currencies = getCurrencies(country.currencies);
    const languages = getLanguages(country.languages);
    const borders = country.borders || []; // Array of country codes
    
    // Create detail container
    const detailDiv = document.createElement('div');
    detailDiv.className = 'detail-container';
    
    // Build the HTML structure
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
                
                ${borders.length > 0 ? `
                    <div class="mb-3">
                        <strong>Border Countries:</strong><br>
                        <div class="mt-2" id="borderButtons">
                            ${createBorderButtons(borders)}
                        </div>
                    </div>
                ` : ''}
                
                <div class="mt-4">
                    <a href="/" class="btn btn-primary">← Back to Home</a>
                </div>
            </div>
        </div>
    `;
    
    container.appendChild(detailDiv);
    
    // Add click handlers to border buttons
    setupBorderButtons();
}

/**
 * Get native name from nativeName object
 */
function getNativeName(nativeNameObj) {
    if (!nativeNameObj) return 'N/A';
    
    // Get first native name available
    const firstKey = Object.keys(nativeNameObj)[0];
    return nativeNameObj[firstKey]?.common || 'N/A';
}

/**
 * Format currencies into readable string
 */
function getCurrencies(currenciesObj) {
    if (!currenciesObj) return 'N/A';
    
    // Extract currency names and join them
    const currencyNames = Object.values(currenciesObj)
        .map(currency => currency.name)
        .join(', ');
    
    return currencyNames || 'N/A';
}

/**
 * Format languages into readable string
 */
function getLanguages(languagesObj) {
    if (!languagesObj) return 'N/A';
    
    // Extract language names and join them
    const languageNames = Object.values(languagesObj).join(', ');
    
    return languageNames || 'N/A';
}

/**
 * Create buttons for border countries
 * @param {Array} borders - Array of country codes (e.g., ['IND', 'CHN'])
 */
function createBorderButtons(borders) {
    return borders
        .map(code => `
            <button class="btn btn-outline-secondary btn-sm me-2 mb-2 border-btn" data-code="${code}">
                ${code}
            </button>
        `)
        .join('');
}

/**
 * Setup click handlers for border country buttons
 */
function setupBorderButtons() {
    const buttons = document.querySelectorAll('.border-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const code = button.dataset.code;
            
            // Navigate to country by code
            // We'll need to convert code to country name
            // For now, just reload the page with the code
            // (We can improve this later if needed)
            window.location.href = `/country/${code.toLowerCase()}`;
        });
    });
}

export default { render };