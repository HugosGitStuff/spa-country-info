// this view renders home page

// Helper to get correct base path for navigation(github pages support)
function getBasePath() {
    const base = document.querySelector('base');
    return base ? base.getAttribute('href') : '/';
}

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

    // show world map and button at first
    randomSection.innerHTML = `
    <div class="random-country-card">
        <img src="img/worldmap-green.png" 
             alt="World Map" 
             class="random-country-flag"
             style="opacity: 0.7;">
        <h3 style="color: #2c323f; margin: 20px 0;"> Click and Discover a Random Country</h3>
        <button class="btn btn-secondary btn-lg" id="randomButton">
            🌍 Let's explore!
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
            const basePath = document.querySelector('base')?.getAttribute('href') || '/';
            window.location.href = `${basePath}country/${matchingCountry.name.common.toLowerCase()}`;
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

    // function to setup random button
    function setupRandomButton() {
        const randomButton = document.querySelector('#randomButton');

        randomButton.addEventListener('click', () => {
            // get new random country
            const randomIndex = Math.floor(Math.random() * countries.length);
            const newCountry = countries[randomIndex];

            console.log('New country:', newCountry.name.common);

            // update card
            randomSection.innerHTML = `
                <div class="random-country-card">
                    <img src="${newCountry.flags.svg || newCountry.flags.png}" 
                         alt="${newCountry.name.common} flag" 
                         class="random-country-flag">
                    <h2 class="random-country-name">${newCountry.name.common}</h2>
                    <div class="random-country-info">
                        <p><strong>Population:</strong> ${newCountry.population.toLocaleString()}</p>
                        <p><strong>Continent:</strong> ${newCountry.region}</p>
                        <p><strong>Capital:</strong> ${newCountry.capital ? newCountry.capital[0] : 'N/A'}</p>
                    </div>
                    <button class="btn btn-secondary btn-lg" id="randomButton">
                        ✈️ Get Random Country
                    </button>
                </div>
            `;

            // make the flag clickable!
            const flag = document.querySelector('.random-country-flag');
            flag.style.cursor = 'pointer'; // show it's clickable
            flag.addEventListener('click', () => {
                const basePath = document.querySelector('base')?.getAttribute('href') || '/';
                window.location.href = `${basePath}country/${newCountry.name.common.toLowerCase()}`;
            });

            // setup the new button again
            setupRandomButton();
        });
    }

    // call it the first time
    setupRandomButton();
}

export default { render };