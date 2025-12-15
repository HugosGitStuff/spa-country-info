import countryService from '../service/countryService.js';
import allCountriesView from '../view/allCountriesView.js';

// init all countries grid page
export async function init(params) {
    // show loading state
    const container = document.querySelector('#container');
    container.innerHTML = `
        <div class="text-center mt-5">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <p class="mt-2">Loading all countries...</p>
        </div>
    `;
    
    // fetch all countries from API
    const countries = await countryService.getAllCountries();
    
    // check for incoming data
    if (countries && countries.length > 0) {
        // sort countries alphabetically
        countries.sort((a, b) => {
            const nameA = a.name.common.toUpperCase();
            const nameB = b.name.common.toUpperCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        });
        
        // render view with sorted countries
        allCountriesView.render(countries);
    } else {
        // show error if no data
        container.innerHTML = `
            <div class="error-message text-center">
                <h3>Poopoo =( ... Could not load countries</h3>
                <p>Please check your internet connection and try again.</p>
            </div>
        `;
    }
}