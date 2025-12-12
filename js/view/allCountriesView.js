// allCountriesView.js
// This view renders all countries in a grid

// Helper to get correct base path for navigation
function getBasePath() {
    const base = document.querySelector('base');
    return base ? base.getAttribute('href') : '/';
}

function render(countries) {
    const container = document.querySelector('#container');
    container.innerHTML = ''; // Clear previous content
    
    // Create grid container
    const grid = document.createElement('div');
    grid.className = 'country-grid';
    
    // Create a card for each country
    countries.forEach(country => {
        const card = createCountryCard(country);
        grid.appendChild(card);
    });
    
    container.appendChild(grid);
}

// Create a single country card
function createCountryCard(country) {
    const name = country.name.common;
    const flag = country.flags.png;
    const population = country.population.toLocaleString();
    const region = country.region;
    const capital = country.capital ? country.capital[0] : 'N/A';
    
    const card = document.createElement('div');
    card.className = 'country-card';
    
    card.innerHTML = `
        <img src="${flag}" alt="${name} flag" class="country-flag">
        <div class="country-info">
            <div class="country-name">${name}</div>
            <div class="country-details">
                <strong>Population:</strong> ${population}<br>
                <strong>Region:</strong> ${region}<br>
                <strong>Capital:</strong> ${capital}
            </div>
        </div>
    `;
    
    // Click card to go to detail page
    card.addEventListener('click', () => {
    const basePath = getBasePath();
    window.location.href = `${basePath}country/${name.toLowerCase()}`;
});
    
    return card;
}

export default { render };