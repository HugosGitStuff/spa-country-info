// allCountriesController.js
import countryService from '../service/countryService.js';
import allCountriesView from '../view/allCountriesView.js';

// Initialize all countries grid page
export async function init(params) {
    // Show loading state
    const container = document.querySelector('#container');
    container.innerHTML = `
        <div class="text-center mt-5">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <p class="mt-2">Loading all countries...</p>
        </div>
    `;
    
    // Fetch all countries from API
    const countries = await countryService.getAllCountries();
    
    // Check if we got data
    if (countries && countries.length > 0) {
        // Sort countries alphabetically
        countries.sort((a, b) => {
            const nameA = a.name.common.toUpperCase();
            const nameB = b.name.common.toUpperCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        });
        
        // Render the view with sorted countries
        allCountriesView.render(countries);
    } else {
        // Show error if no data
        container.innerHTML = `
            <div class="error-message text-center">
                <h3>Oops! Could not load countries</h3>
                <p>Please check your internet connection and try again.</p>
            </div>
        `;
    }
}