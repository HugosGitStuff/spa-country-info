
// routes.js defines all the "pages" in our SPA
// it's a map: each route = one "page" the user can visit
export default {
    // home page: search and browse all countries
    home: {
        path: '/',
        controller: 'homeController'
    },
    
    // all countries detail page
    countries: {
        path: '/countries',
        controller: 'allCountriesController'
    },

    // single country detail page
    country: {
        path: '/country/:name',  // :name is a placeholder (like a variable in URL)
        controller: 'countryController'
    },
    
    // region view: all countries in a region
    region: {
        path: '/region/:region',  // :region is the placeholder
        controller: 'regionController'
    },
    
    // tracks where user currently is
    currentPath: {
        path: '',
        controller: ''
    }
};