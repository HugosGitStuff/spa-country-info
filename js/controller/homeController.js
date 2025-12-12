
import countryService from '../service/countryService.js';
import homeView from '../view/homeView.js';

// init home page
export async function init(params) {
    // show loading state
    const container = document.querySelector('#container');
    container.innerHTML = `
        <div class="text-center mt-5">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <p class="mt-2">Loading countries...</p>
        </div>
    `;
    
    // fetch all countries from api
    const countries = await countryService.getAllCountries();
    
    // check for data
    if (countries && countries.length > 0) {
        
        homeView.render(countries); // render view with sorted country data
    } else {
        // show error if no data
        container.innerHTML = `
            <div class="error-message text-center">
                <h3>Oops! Could not load countries</h3>
                <p>Please check your internet connection and try again.</p>
            </div>
        `;
    }
}