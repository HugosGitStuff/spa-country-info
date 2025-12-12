// this view renders home page

function render(countries) {
    const container = document.querySelector('#container');
    container.innerHTML = ''; // clear previous content
    
    // create search section
    const searchSection = document.createElement('div');
    searchSection.className = 'search-section';
    searchSection.innerHTML = `
        <h3>Explore Countries Around the World</h3>
        <div class="input-group">
            <input 
                type="text" 
                id="searchInput" 
                class="form-control search-input" 
                placeholder="Find country..."
            >
            <button class="btn btn-outline-dark" type="button" id="searchButton">🔍</button>
        </div>
    `;
    
    container.appendChild(searchSection);

// create random country section
const randomSection = document.createElement('div');
randomSection.className = 'random-country-section';
randomSection.id = 'randomSection';

// get random country to start with
const randomIndex = Math.floor(Math.random() * countries.length);
const randomCountry = countries[randomIndex];

// add random country display
randomSection.innerHTML = `
    <div class="random-country-card">
        <img src="${randomCountry.flags.svg || randomCountry.flags.png}" 
             alt="${randomCountry.name.common} flag" 
             class="random-country-flag">
        <h2 class="random-country-name">${randomCountry.name.common}</h2>
        <div class="random-country-info">
            <p><strong>Population:</strong> ${randomCountry.population.toLocaleString()}</p>
            <p><strong>Continent:</strong> ${randomCountry.region}</p>
            <p><strong>Capital:</strong> ${randomCountry.capital ? randomCountry.capital[0] : 'N/A'}</p>
        </div>
        <button class="btn btn-secondary btn-lg" id="randomButton">
            🔀 Get Random Country
        </button>
    </div>
`;

container.appendChild(randomSection);
    
    // get search elements
    const searchInput = document.querySelector('#searchInput');
    const searchButton = document.querySelector('#searchButton');
    
    // when button clicked
    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim().toLowerCase();
        
        // find matching country
        const matchingCountry = countries.find(country => {
            const name = country.name.common.toLowerCase();
            return name.includes(searchTerm);
        });
        
        // navigate if found
        if (matchingCountry) {
            window.location.href = `/country/${matchingCountry.name.common.toLowerCase()}`;
        } else {
            alert('Country not found!');
        }
    });
    
    // when enter key is pressed
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchButton.click(); // simulate button click
        }
    });

    // get the random button
    const randomButton = document.querySelector('#randomButton');
    
    // when random button is clicked
randomButton.addEventListener('click', () => {
    // get new random country
    const randomIndex = Math.floor(Math.random() * countries.length);
    const newCountry = countries[randomIndex];
    
    console.log('New country:', newCountry.name.common); // Test in console
});

}

export default { render };