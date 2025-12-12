import routes from "./routes.js";

function setCurrentRoute({ path, controller }) {
    routes.currentPath.path = path;
    routes.currentPath.controller = controller;
}

// new helper... extract parameters from URL and return { name: 'portugal' }
function extractParams(url, pattern) {
    // split URL and pattern into parts
    const urlParts = url.split('/').filter(part => part); // ['country', 'portugal']
    const patternParts = pattern.split('/').filter(part => part); // ['country', ':name']
    
    const params = {};
    
    // loop through each part and find parameters parts starting with :
    for (let i = 0; i < patternParts.length; i++) {
        if (patternParts[i].startsWith(':')) {
            // remove the ':' and use as key, get value from URL
            const paramName = patternParts[i].substring(1); // 'name'
            params[paramName] = urlParts[i]; 
        }
    }
    
    return params;
}

// new helper... check if URL matches a route pattern
function matchRoute(url, pattern) {
    const urlParts = url.split('/').filter(part => part);
    const patternParts = pattern.split('/').filter(part => part);
    
    // must have same number of parts
    if (urlParts.length !== patternParts.length) {
        return false;
    }
    
    // check each part... either exact match or parameter that starts with :
    return patternParts.every((part, i) => {
        return part.startsWith(':') || part === urlParts[i];
    });
}

// updated... now finds routes with dynamic parameters
function navigate(path, firstload = false) {
    // on first load, check if we're redirected from 404
    if (firstload && window.__spa_redirect__) {
        const redirectUrl = new URL(window.__spa_redirect__);
        path = redirectUrl.pathname.replace('/spa-country-info', ''); // remove base path
        delete window.__spa_redirect__;
    }
    
    if (path === routes.currentPath.path && path !== '/') {
        return;
    }

    // find matching route... now handles dynamic routes
    let matchedRoute = null;
    let params = {};
    
    for (const key in routes) {
        if (key === 'currentPath') continue; // skip currentPath
        
        const route = routes[key];
        if (matchRoute(path, route.path)) {
            matchedRoute = route;
            params = extractParams(path, route.path);
            break;
        }
    }
    
    // no match found, use home route
    const route = matchedRoute || routes.home;

    setCurrentRoute(route);

    firstload
        ? history.replaceState({ route, params }, '', path)
        : history.pushState({ route, params }, '', path);

    launchController(route.controller, params);
}

// updated... handle back/forward button with parameters
function handlePopState({ state }) {
    const route = state?.route || routes.home;
    const params = state?.params || {};

    setCurrentRoute(route);
    launchController(route.controller, params);
}

// updated... now passes parameters to controller
async function launchController(controllerName, params = {}) {
    try {
        const module = await import(`./controller/${controllerName}.js`);
        module.init(params); // pass parameters to controller
    } catch (error) {
        console.log(error);
    }
}

function setAnchorEventListener() {
    const anchors = document.querySelectorAll('a');

    anchors.forEach(elem => {
        elem.addEventListener('click', e => {
            e.preventDefault();
            navigate(elem.pathname);
        });
    });
}

export function init() {
    const path = window.location.pathname;

    navigate(path, true);
    addEventListener('popstate', handlePopState);
    setAnchorEventListener();
}

export default { init };