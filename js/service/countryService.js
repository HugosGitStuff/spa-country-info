// this service fetches country data from the rest countries api... it prepares all the data

// base url for the rest countries api
const BASE_URL = 'https://restcountries.com/v3.1';

// fields we need from api... this makes request faster and fixes 400 error
const FIELDS = 'name,flags,population,region,capital,currencies,languages,borders,cca3';


// fetch all countries from api... returns array of country objects.
async function getAllCountries() {
    
    try {
        // make http get request to api
        // add ?fields= parameter to specify what data we want
        const response = await fetch(`${BASE_URL}/all?fields=${FIELDS}`);
        
        // check if request was successful... status code 200-299
        if (!response.ok) {
            throw new Error('Poopoo =( ... Failed to fetch countries');
        }
        
        // convert response to json
        const countries = await response.json();
        return countries;
        
    } catch (error) {
        // if something goes wrong, log it and return empty array
        console.error('Poopoo =( ... Error fetching countries:', error);
        return [];
    }
}

// fetch countries by name... returns Country object.
async function getCountryByName(name){

  try {
    const response = await fetch(`${BASE_URL}/name/${name}?fields=${FIELDS}`);

        if (!response.ok) {
            throw new Error('Poopoo =( ... Country not found.');
        }
        
        const countries = await response.json();
        return countries[0];

  } catch (error) {
      
        console.error('Poopoo =( ... Error fetching country:', error);
        return null;
    }

}

// fetch all countries in a specific region... returns array of country objects in that region
async function getCountriesByRegion(region) {
    try {
        const response = await fetch(`${BASE_URL}/region/${region}?fields=${FIELDS}`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch region');
        }
        
        const countries = await response.json();
        return countries;
        
    } catch (error) {
        console.error('Error fetching region:', error);
        return [];
    }
}

// export all functions so other modules can use them
export default { 
    getAllCountries, 
    getCountryByName, 
    getCountriesByRegion 
};



































