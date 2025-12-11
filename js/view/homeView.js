// this view renders the home page with country cards

// render the home page with search bar and country grid
function render(countries) {
    const container = document.querySelector('#container');
    container.innerHTML = ''; // clear previous content
    
    // create search section... static part at top
    const searchSection = document.createElement('div');
    searchSection.className = 'search-section';
    searchSection.innerHTML = `
        <h2>Explore Countries Around the World</h2>
        <input 
            type="text" 
            id="searchInput" 
            class="form-control search-input" 
            placeholder="Search for a country..."
        >
    `;
    
    // Create grid container for country cards
    const grid = document.createElement('div');
    grid.className = 'country-grid';
    grid.id = 'countryGrid';
    
    // Create a card for each country
    countries.forEach(country => {
        const card = createCountryCard(country);
        grid.appendChild(card);
    });
    
    // Add everything to the main container
    container.appendChild(searchSection);
    container.appendChild(grid);
    
    // Add search functionality
    setupSearch(countries);
}

/**
 * Create a single country card element
 * @param {Object} country - Country object from API
 * @returns {HTMLElement} - The country card element
 */
function createCountryCard(country) {
    // Extract country data (API structure)
    const name = country.name.common; // e.g., "Portugal"
    const flag = country.flags.png; // Flag image URL
    const population = country.population.toLocaleString(); // Format with commas
    const region = country.region; // e.g., "Europe"
    const capital = country.capital ? country.capital[0] : 'N/A'; // Some countries have no capital
    
    // Create card element
    const card = document.createElement('div');
    card.className = 'country-card';
    
    // Fill card with HTML
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
    
    // NEW CODE (FIXED):
    card.addEventListener('click', () => {
        const countryName = name.toLowerCase();
        // Use the browser's native navigation - let the router handle it!
        window.location.href = `/country/${countryName}`;
        });
    
    return card;
}

// setup search functionality
function setupSearch(allCountries) {
    const searchInput = document.querySelector('#searchInput');
    const grid = document.querySelector('#countryGrid');
    
    // listen for typing in search box
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        // filter countries based on search term
        const filtered = allCountries.filter(country => {
            const name = country.name.common.toLowerCase();
            return name.includes(searchTerm);
        });
        
        // clear grid
        grid.innerHTML = '';
        
        // show filtered results
        if (filtered.length > 0) {
            filtered.forEach(country => {
                const card = createCountryCard(country);
                grid.appendChild(card);
            });
        } else {
            // no results found
            grid.innerHTML = '<p class="text-center">No countries found</p>';
        }
        
        // update count
        const countText = document.querySelector('.search-section p');
        countText.textContent = `Found ${filtered.length} countries`;
    });
}

export default { render };