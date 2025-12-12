# 🌍 Country Explorer - Single Page Application

A responsive web application that allows users to explore countries around the world using the REST Countries API. Built as a capstone project during a Java Full-Stack Development bootcamp to demonstrate frontend development skills.

**Live Demo:** [https://hugosgitstuff.github.io/spa-country-info/](https://hugosgitstuff.github.io/spa-country-info/)

---

## 📋 Project Overview

Country Explorer is a Single Page Application (SPA) that provides an interactive way to discover and learn about countries worldwide. Users can browse all countries, search for specific nations, explore random countries, and view detailed information about each country including population, capital, languages, and currencies.

### Project Objectives

- Build a fully functional SPA using **vanilla JavaScript** (no frameworks)
- Implement **client-side routing** without page refreshes
- Consume and display data from a **RESTful API**
- Apply **responsive design** principles for mobile and desktop
- Deploy a working application to **GitHub Pages**
- Follow **MVC architectural pattern** for code organization

---

## ✨ Features

### 🏠 Home Page
- **Search Functionality**: Find any country by name with instant results
- **Random Country Discovery**: Click a button to explore a random country
- **Interactive World Map**: Visual representation before exploration begins
- **Clickable Flags**: Navigate directly to country details

### 🗺️ All Countries View
- **Grid Layout**: Display all 250+ countries in an organized grid
- **Alphabetical Sorting**: Countries sorted A-Z for easy browsing
- **Hover Effects**: Visual feedback on card interactions
- **Click to Explore**: Each card navigates to detailed country view

### 📊 Country Detail Page
- **Comprehensive Information**: Native name, population, region, capital
- **Currency & Language Data**: Display all currencies and languages
- **High-Quality Flags**: SVG flags with fallback to PNG
- **Navigation**: Easy return to home page

### 🎨 UI/UX Features
- **Sticky Navigation Bar**: Navbar remains visible while scrolling
- **Loading States**: Spinner displays during API calls
- **Error Handling**: User-friendly messages for failed searches
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Smooth Transitions**: Hover effects and animations

---

## 🛠️ Technologies & Tools

### Frontend Technologies
- **HTML5**: Semantic markup and structure
- **CSS3**: Custom styling with Bootstrap integration
- **JavaScript (ES6+)**: Modern JavaScript features
  - ES6 Modules
  - Async/Await
  - Arrow Functions
  - Template Literals
  - Destructuring

### Libraries & Frameworks
- **Bootstrap 5.3**: Responsive grid system and components
- **REST Countries API v3.1**: Country data source

### Development Tools
- **VS Code**: Primary code editor
- **Live Server**: Local development server with hot reload
- **Git**: Version control
- **GitHub**: Code hosting and collaboration
- **GitHub Pages**: Free hosting for static sites

### Architecture & Patterns
- **MVC Pattern**: Separation of concerns
  - **Models**: Data services (API calls)
  - **Views**: UI rendering
  - **Controllers**: Business logic coordination
- **Client-Side Routing**: Custom SPA router
- **Modular JavaScript**: ES6 import/export

---

## 💡 Key Competencies Demonstrated

### JavaScript Skills
✅ DOM Manipulation (querySelector, createElement, appendChild)  
✅ Event Handling (click, keypress events)  
✅ Asynchronous Programming (Fetch API, Promises, async/await)  
✅ Array Methods (map, filter, find, forEach, sort)  
✅ Object Destructuring and Spread Operator  
✅ ES6 Modules (import/export)  
✅ Error Handling (try/catch)  

### Web Development Fundamentals
✅ Responsive Web Design (mobile-first approach)  
✅ CSS Flexbox & Grid Layouts  
✅ RESTful API Integration  
✅ Single Page Application Architecture  
✅ Client-Side Routing (History API)  
✅ URL Parameter Handling  
✅ Local Development Environment Setup  

### Software Engineering Practices
✅ Code Organization (MVC pattern)  
✅ Separation of Concerns  
✅ DRY Principles (Don't Repeat Yourself)  
✅ Version Control with Git  
✅ Deployment to Production  
✅ Cross-browser Compatibility  
✅ Debugging with Browser DevTools  

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- **VS Code** with Live Server extension (for local development)
- **Git** (for cloning the repository)

### Installation & Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/hugosgitstuff/spa-country-info.git
   cd spa-country-info
   ```

2. **Open in VS Code**
   ```bash
   code .
   ```

3. **Start Live Server**
   - Right-click on `index.html`
   - Select "Open with Live Server"
   - Application opens at `http://127.0.0.1:5500`

4. **Start Exploring!**
   - Navigate through the app
   - Make changes and see live updates

---

## 📁 Project Structure

```
spa-country-info/
├── index.html              # Main HTML file
├── 404.html               # GitHub Pages SPA redirect
├── css/
│   └── style.css          # Custom styles
├── js/
│   ├── app.js            # Application entry point
│   ├── router.js         # Client-side routing logic
│   ├── routes.js         # Route definitions
│   ├── controller/
│   │   ├── homeController.js
│   │   ├── allCountriesController.js
│   │   └── countryController.js
│   ├── view/
│   │   ├── homeView.js
│   │   ├── allCountriesView.js
│   │   └── countryView.js
│   └── service/
│       └── countryService.js    # API calls
├── img/
│   └── worldmap-green.png      # World map image
└── README.md
```

---

## 🌐 Deployment

This application is deployed on **GitHub Pages** using a custom 404 redirect strategy to handle SPA routing.

### Deployment Steps
1. Push code to GitHub repository
2. Enable GitHub Pages in repository settings
3. Set source to `main` branch, root folder
4. Configure custom 404.html for SPA routing
5. Access live site at: `https://hugosgitstuff.github.io/spa-country-info/`

### GitHub Pages SPA Configuration
- **Base Tag**: Dynamic base path detection for local vs. production
- **404 Redirect**: Handles direct URL navigation
- **Session Storage**: Preserves intended route during redirects

---

## 🎓 Learning Outcomes

This project was completed during **Week 9** of a **14-week Java Full-Stack Bootcamp**. It represents the transition from backend Java development to frontend JavaScript, demonstrating:

- Understanding of **web application architecture**
- Ability to **consume external APIs**
- Proficiency in **modern JavaScript**
- Knowledge of **responsive design principles**
- Experience with **deployment workflows**
- Application of **software design patterns**

---

## 🔄 API Reference

**REST Countries API v3.1**
- Base URL: `https://restcountries.com/v3.1/`
- Endpoints Used:
  - `GET /all?fields=...` - Fetch all countries
  - `GET /name/{name}?fields=...` - Search by name
  - `GET /region/{region}?fields=...` - Filter by region

**Fields Retrieved:**
- name, flags, population, region, capital, currencies, languages, borders, cca3

---

## 🐛 Known Issues & Future Enhancements

### Current Limitations
- No region filtering (Americas, Europe, Asia, Africa, Oceania) - *planned for Day 2*
- Search is exact match only (no fuzzy search)

### Potential Improvements
- Add region filtering functionality
- Implement autocomplete for search
- Add country comparison feature
- Include maps integration
- Save favorite countries (localStorage)
- Dark mode toggle
- Accessibility improvements (ARIA labels)

---

## 👨‍💻 Author

**Hugo** - Softaware Engineering and AI Full-Stack Development Bootcamp Student  
- GitHub: [@hugosgitstuff](https://github.com/hugosgitstuff)

---

## 🙏 Acknowledgments

- **REST Countries API** for providing free country data
- **Bootstrap** team for the CSS framework
- **Bootcamp Instructors** for guidance and support

---

## 📄 License

This project is open source and available for educational purposes.

---

**⭐ If you found this project helpful, please give it a star!**
