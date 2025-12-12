// homeView.js
// This view renders the home page

function render(countries) {
    const container = document.querySelector('#container');
    container.innerHTML = ''; // Clear previous content
    
    // Create search section
    const searchSection = document.createElement('div');
    searchSection.className = 'search-section';
    searchSection.innerHTML = `
        <h3>Explore Countries Around the World</h3>
        <div class="input-group">
            <input 
                type="text" 
                id="searchInput" 
                class="form-control search-input" 
                placeholder="Search for a country..."
            >
            <button class="btn btn-outline-primary" type="button" id="searchButton">
                🔍
            </button>
        </div>
    `;
    
    container.appendChild(searchSection);

    // Create random country section
const randomSection = document.createElement('div');
randomSection.className = 'random-country-section';
randomSection.id = 'randomSection';

// Get a random country to start with
const randomIndex = Math.floor(Math.random() * countries.length);
const randomCountry = countries[randomIndex];

// Add the random country display
randomSection.innerHTML = `
    <div class="random-country-card">
        <img src="${randomCountry.flags.svg || randomCountry.flags.png}" 
             alt="${randomCountry.name.common} flag" 
             class="random-country-flag">
        <h2 class="random-country-name">${randomCountry.name.common}</h2>
        <div class="random-country-info">
            <p><strong>Population:</strong> ${randomCountry.population.toLocaleString()}</p>
            <p><strong>Region:</strong> ${randomCountry.region}</p>
            <p><strong>Capital:</strong> ${randomCountry.capital ? randomCountry.capital[0] : 'N/A'}</p>
        </div>
        <button class="btn btn-primary btn-lg" id="randomButton">
            🎲 Get Random Country
        </button>
    </div>
`;

container.appendChild(randomSection);
    
    // Get the search elements
    const searchInput = document.querySelector('#searchInput');
    const searchButton = document.querySelector('#searchButton');
    
    // When button is clicked
    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim().toLowerCase();
        
        // Find matching country
        const matchingCountry = countries.find(country => {
            const name = country.name.common.toLowerCase();
            return name.includes(searchTerm);
        });
        
        // Navigate if found
        if (matchingCountry) {
            window.location.href = `/country/${matchingCountry.name.common.toLowerCase()}`;
        } else {
            alert('Country not found!');
        }
    });
    
    // When Enter key is pressed
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchButton.click(); // Simulate button click
        }
    });
}

export default { render };