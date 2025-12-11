// countryController.js
import countryService from '../service/countryService.js';
import countryView from '../view/countryView.js';

// Initialize country detail page
export async function init(params) {
    // oading state
    const container = document.querySelector('#container');
    container.innerHTML = `
        <div class="text-center mt-5">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <p class="mt-2">Loading country details...</p>
        </div>
    `;
    
    // Get country name from URL parameters
    const countryName = params.name;
    
    if (!countryName) {
        // No country name provided, redirect to home
        window.location.href = '/';
        return;
    }
    
    // Fetch country data from API
    const country = await countryService.getCountryByName(countryName);
    
    // Check if we got data
    if (country) {
        // Render the country detail view
        countryView.render(country);
    } else {
        // Show error if country not found
        container.innerHTML = `
            <div class="error-message text-center">
                <h3>Country Not Found</h3>
                <p>Sorry, we couldn't find information about "${countryName}"</p>
                <a href="/" class="btn btn-primary mt-3">← Back to Home</a>
            </div>
        `;
    }
}