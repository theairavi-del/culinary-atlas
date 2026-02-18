// Culinary Atlas - Google Maps Style with Regional Zoom
const mapData = {
    // Countries (Zoom 0-3)
    countries: {
        italy: {
            name: "Italy",
            flag: "🇮🇹",
            coords: [42.5, 12.5],
            bounds: [[47.1, 6.6], [35.5, 18.5]],
            hasRegions: true,
            zoomThreshold: 5
        },
        mexico: {
            name: "Mexico",
            flag: "🇲🇽",
            coords: [23.5, -102.5],
            bounds: [[32.7, -117.0], [14.5, -86.7]],
            hasRegions: true,
            zoomThreshold: 5
        },
        japan: {
            name: "Japan",
            flag: "🇯🇵",
            coords: [36.5, 138.0],
            hasRegions: true,
            zoomThreshold: 5
        },
        india: {
            name: "India",
            flag: "🇮🇳",
            coords: [22.5, 79.0],
            bounds: [[35.5, 68.1], [6.7, 97.4]],
            hasRegions: true,
            zoomThreshold: 5
        },
        france: {
            name: "France",
            flag: "🇫🇷",
            coords: [46.5, 2.2],
            hasRegions: true,
            zoomThreshold: 5
        },
        thailand: {
            name: "Thailand",
            flag: "🇹🇭",
            coords: [15.0, 100.5],
            hasRegions: true,
            zoomThreshold: 5
        },
        usa: {
            name: "United States",
            flag: "🇺🇸",
            coords: [39.8, -98.5],
            bounds: [[49.4, -125.0], [24.5, -66.9]],
            hasRegions: true,
            zoomThreshold: 4
        },
        china: {
            name: "China",
            flag: "🇨🇳",
            coords: [35.0, 104.0],
            hasRegions: true,
            zoomThreshold: 4
        },
        greece: {
            name: "Greece",
            flag: "🇬🇷",
            coords: [39.0, 22.0],
            hasRegions: false
        },
        spain: {
            name: "Spain",
            flag: "🇪🇸",
            coords: [40.0, -4.0],
            hasRegions: true,
            zoomThreshold: 5
        },
        brazil: {
            name: "Brazil",
            flag: "🇧🇷",
            coords: [-14.2, -51.9],
            hasRegions: true,
            zoomThreshold: 4
        },
        vietnam: {
            name: "Vietnam",
            flag: "🇻🇳",
            coords: [14.0, 108.3],
            hasRegions: true,
            zoomThreshold: 5
        },
        morocco: {
            name: "Morocco",
            flag: "🇲🇦",
            coords: [31.8, -7.1],
            hasRegions: false
        },
        lebanon: {
            name: "Lebanon",
            flag: "🇱🇧",
            coords: [33.9, 35.9],
            hasRegions: false
        },
        korea: {
            name: "South Korea",
            flag: "🇰🇷",
            coords: [36.5, 127.9],
            hasRegions: true,
            zoomThreshold: 6
        }
    },

    // Regions/States (Zoom 4+)
    regions: {
        // USA States
        usa: {
            california: {
                name: "California",
                coords: [36.7, -119.4],
                recipes: ["Fish Tacos", "In-N-Out Burger", "Avocado Toast", "Cioppino", "California Roll"]
            },
            texas: {
                name: "Texas",
                coords: [31.0, -99.9],
                recipes: ["Brisket BBQ", "Chili", "Breakfast Tacos", "Kolaches", "Chicken Fried Steak"]
            },
            newyork: {
                name: "New York",
                coords: [43.0, -75.5],
                recipes: ["NY Pizza", "Bagels with Lox", "Buffalo Wings", "Cheesecake", "Pastrami Sandwich"]
            },
            louisiana: {
                name: "Louisiana",
                coords: [30.9, -91.9],
                recipes: ["Gumbo", "Jambalaya", "Beignets", "Po' Boy", "Crawfish Étouffée"]
            }
        },
        
        // India States
        india: {
            punjab: {
                name: "Punjab",
                coords: [31.1, 75.3],
                recipes: ["Butter Chicken", "Sarson ka Saag", "Lassi", "Paratha", "Amritsari Kulcha"]
            },
            kerala: {
                name: "Kerala",
                coords: [10.8, 76.9],
                recipes: ["Fish Curry", "Appam", "Puttu", "Sadya", "Kerala Parotta"]
            },
            maharashtra: {
                name: "Maharashtra",
                coords: [19.7, 75.9],
                recipes: ["Vada Pav", "Pav Bhaji", "Misal Pav", "Puran Poli", "Mumbai Bhel"]
            },
            bengal: {
                name: "West Bengal",
                coords: [22.9, 87.7],
                recipes: ["Fish Curry", "Rasgulla", "Kathi Rolls", "Biryani", "Mishti Doi"]
            }
        },

        // Italy Regions
        italy: {
            lazio: {
                name: "Lazio",
                coords: [41.9, 12.9],
                recipes: ["Carbonara", "Cacio e Pepe", "Amatriciana", "Saltimbocca", "Carciofi alla Romana"]
            },
            toscana: {
                name: "Tuscany",
                coords: [43.7, 10.9],
                recipes: ["Bistecca Fiorentina", "Ribollita", "Pappa al Pomodoro", "Cantucci", "Pici"]
            },
            campania: {
                name: "Campania",
                coords: [40.8, 14.7],
                recipes: ["Pizza Margherita", "Spaghetti alle Vongole", "Sfogliatella", "Limoncello", "Babà"]
            },
            emilia: {
                name: "Emilia-Romagna",
                coords: [44.5, 11.3],
                recipes: ["Tagliatelle al Ragù", "Tortellini", "Parmigiano", "Prosciutto", "Lasagna"]
            }
        },

        // China Provinces
        china: {
            sichuan: {
                name: "Sichuan",
                coords: [30.6, 102.9],
                recipes: ["Mapo Tofu", "Kung Pao Chicken", "Hot Pot", "Dan Dan Noodles", "Chongqing Chicken"]
            },
            guangdong: {
                name: "Guangdong",
                coords: [23.3, 113.4],
                recipes: ["Dim Sum", "Roast Duck", "Wonton Noodles", "Char Siu", "Congee"]
            },
            beijing: {
                name: "Beijing",
                coords: [39.9, 116.4],
                recipes: ["Peking Duck", "Zha Jiang Mian", "Jianbing", "Mongolian Hot Pot", "Lǘdagunr"]
            }
        },

        // Mexico States
        mexico: {
            oaxaca: {
                name: "Oaxaca",
                coords: [17.0, -96.7],
                recipes: ["Mole Negro", "Tlayudas", "Memelas", "Mezcal", "Chapulines"]
            },
            yucatan: {
                name: "Yucatán",
                coords: [20.9, -89.0],
                recipes: ["Cochinita Pibil", "Panuchos", "Sopa de Lima", "Poc Chuc", "Marquesitas"]
            }
        }
    },

    // National Recipes (shown when clicking country at lower zoom)
    recipes: {
        italy: {
            national: [
                { name: "Pizza Margherita", desc: "Classic Neapolitan pizza", emoji: "🍕" },
                { name: "Pasta Carbonara", desc: "Creamy pasta with eggs and guanciale", emoji: "🍝" },
                { name: "Tiramisu", desc: "Coffee-flavored dessert", emoji: "🍰" },
                { name: "Risotto", desc: "Creamy saffron rice", emoji: "🍚" },
                { name: "Osso Buco", desc: "Braised veal shanks", emoji: "🍖" }
            ]
        },
        mexico: {
            national: [
                { name: "Tacos al Pastor", desc: "Spit-grilled pork tacos", emoji: "🌮" },
                { name: "Guacamole", desc: "Fresh avocado dip", emoji: "🥑" },
                { name: "Enchiladas", desc: "Corn tortillas with chili sauce", emoji: "🌯" },
                { name: "Chiles en Nogada", desc: "Stuffed poblano peppers", emoji: "🌶️" },
                { name: "Tamales", desc: "Steamed corn dough", emoji: "🫔" }
            ]
        },
        japan: {
            national: [
                { name: "Sushi", desc: "Vinegared rice with fresh fish", emoji: "🍣" },
                { name: "Ramen", desc: "Wheat noodles in rich broth", emoji: "🍜" },
                { name: "Tempura", desc: "Lightly battered seafood", emoji: "🍤" },
                { name: "Katsu Curry", desc: "Breaded pork with curry", emoji: "🍛" },
                { name: "Matcha Tea", desc: "Finely ground green tea", emoji: "🍵" }
            ]
        },
        india: {
            national: [
                { name: "Butter Chicken", desc: "Creamy tomato curry", emoji: "🍗" },
                { name: "Biryani", desc: "Fragrant rice with spiced meat", emoji: "🍚" },
                { name: "Naan Bread", desc: "Soft leavened flatbread", emoji: "🫓" },
                { name: "Samosa", desc: "Crispy pastry with potatoes", emoji: "🥟" },
                { name: "Tandoori Chicken", desc: "Yogurt-marinated roasted chicken", emoji: "🍖" }
            ]
        },
        usa: {
            national: [
                { name: "Classic Burger", desc: "Juicy beef patty with cheese", emoji: "🍔" },
                { name: "BBQ Ribs", desc: "Slow-cooked pork ribs", emoji: "🍖" },
                { name: "Apple Pie", desc: "Classic double-crust pie", emoji: "🥧" },
                { name: "Mac & Cheese", desc: "Creamy baked pasta", emoji: "🧀" },
                { name: "Fried Chicken", desc: "Crispy southern fried chicken", emoji: "🍗" }
            ]
        }
    }
};

let map;
let currentZoom = 2;
let countryMarkers = [];
let regionMarkers = [];
let currentCountry = null;

// Initialize map
function initMap() {
    map = L.map('map', {
        center: [20, 0],
        zoom: 2,
        minZoom: 2,
        maxZoom: 10,
        zoomControl: false,
        worldCopyJump: true
    });

    // Add zoom control to bottom right
    L.control.zoom({
        position: 'bottomright'
    }).addTo(map);

    // Add fullscreen control
    map.addControl(new L.Control.Fullscreen({
        position: 'bottomright'
    }));

    // Dark themed tiles (CartoDB Dark Matter)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    // Add country markers
    addCountryMarkers();

    // Zoom change handler
    map.on('zoomend', handleZoomChange);

    // Hide loading
    setTimeout(() => {
        document.getElementById('loadingOverlay').classList.add('hidden');
    }, 1000);
}

// Add country markers
function addCountryMarkers() {
    Object.keys(mapData.countries).forEach(key => {
        const country = mapData.countries[key];
        
        const marker = L.marker(country.coords, {
            icon: L.divIcon({
                className: 'country-marker',
                html: `<div style="
                    font-size: 32px; 
                    cursor: pointer; 
                    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
                    transition: transform 0.2s;
                " onmouseover="this.style.transform='scale(1.2)'" 
                   onmouseout="this.style.transform='scale(1)'">${country.flag}</div>`,
                iconSize: [40, 40],
                iconAnchor: [20, 20]
            })
        }).addTo(map);

        marker.bindPopup(`
            <div class="popup-title">${country.name} ${country.flag}</div>
            <div class="popup-subtitle">Click to explore recipes</div>
        `, {
            closeButton: false,
            offset: [0, -10]
        });

        marker.on('click', () => {
            if (country.hasRegions && map.getZoom() >= country.zoomThreshold) {
                showRegions(key);
            } else {
                showCountryRecipes(key);
            }
        });

        countryMarkers.push({ key, marker });
    });
}

// Handle zoom changes
function handleZoomChange() {
    const newZoom = map.getZoom();
    currentZoom = newZoom;
    
    // Update zoom indicator
    let levelText = "World View";
    if (newZoom >= 4) levelText = "Country View";
    if (newZoom >= 6) levelText = "Regional View";
    if (newZoom >= 8) levelText = "City View";
    document.getElementById('zoomLevel').textContent = levelText;

    // Show/hide region markers based on zoom
    if (currentCountry && mapData.countries[currentCountry].hasRegions) {
        const threshold = mapData.countries[currentCountry].zoomThreshold;
        
        if (newZoom >= threshold && regionMarkers.length === 0) {
            addRegionMarkers(currentCountry);
        } else if (newZoom < threshold && regionMarkers.length > 0) {
            removeRegionMarkers();
        }
    }
}

// Show country recipes
function showCountryRecipes(countryKey) {
    const country = mapData.countries[countryKey];
    const recipes = mapData.recipes[countryKey]?.national || [];
    
    currentCountry = countryKey;
    
    // Update panel
    document.getElementById('breadcrumb').textContent = 'World';
    document.getElementById('locationTitle').textContent = `${country.name} ${country.flag}`;
    document.getElementById('locationSubtitle').textContent = 'Traditional National Dishes';
    
    // Build content
    let content = '<div class="recipes-container">';
    content += '<div class="section-title">Popular Dishes</div>';
    
    recipes.forEach(recipe => {
        content += `
            <div class="recipe-card" onclick="showRecipeDetail('${countryKey}', '${recipe.name}')">
                <div class="recipe-image">${recipe.emoji}</div>
                <div class="recipe-content">
                    <h3 class="recipe-title">${recipe.name}</h3>
                    <p class="recipe-desc">${recipe.desc}</p>
                    <span class="recipe-link">View Recipe →</span>
                </div>
            </div>
        `;
    });
    
    if (country.hasRegions) {
        content += `
            <div style="margin-top: 20px; padding: 16px; background: var(--bg-tertiary); border-radius: 8px; text-align: center;">
                <p style="color: var(--text-secondary); margin-bottom: 12px;">Want more specific recipes?</p>
                <button onclick="zoomToCountry('${countryKey}')" style="
                    background: var(--accent);
                    color: #000;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 6px;
                    font-weight: 600;
                    cursor: pointer;
                ">Zoom to See Regions</button>
            </div>
        `;
    }
    
    content += '</div>';
    document.getElementById('panelContent').innerHTML = content;
    
    // Show panel
    document.getElementById('sidePanel').classList.add('active');
}

// Add region markers
function addRegionMarkers(countryKey) {
    const regions = mapData.regions[countryKey];
    if (!regions) return;
    
    Object.keys(regions).forEach(key => {
        const region = regions[key];
        
        const marker = L.marker(region.coords, {
            icon: L.divIcon({
                className: 'region-marker',
                html: `<div style="
                    background: var(--accent);
                    color: #000;
                    padding: 6px 12px;
                    border-radius: 16px;
                    font-size: 12px;
                    font-weight: 600;
                    white-space: nowrap;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
                    cursor: pointer;
                ">${region.name}</div>`,
                iconSize: [100, 30],
                iconAnchor: [50, 15]
            })
        }).addTo(map);

        marker.on('click', () => showRegionRecipes(countryKey, key));
        regionMarkers.push(marker);
    });
}

// Remove region markers
function removeRegionMarkers() {
    regionMarkers.forEach(marker => map.removeLayer(marker));
    regionMarkers = [];
}

// Show region recipes
function showRegionRecipes(countryKey, regionKey) {
    const country = mapData.countries[countryKey];
    const region = mapData.regions[countryKey][regionKey];
    
    document.getElementById('breadcrumb').textContent = `World → ${country.name}`;
    document.getElementById('locationTitle').textContent = region.name;
    document.getElementById('locationSubtitle').textContent = `Regional Specialties of ${country.name}`;
    
    let content = '<div class="recipes-container">';
    content += '<div class="section-title">Local Specialties</div>';
    
    region.recipes.forEach(recipe => {
        content += `
            <div class="recipe-card">
                <div class="recipe-image">🍽️</div>
                <div class="recipe-content">
                    <h3 class="recipe-title">${recipe}</h3>
                    <p class="recipe-desc">Traditional ${region.name} specialty</p>
                    <span class="recipe-link">View Recipe →</span>
                </div>
            </div>
        `;
    });
    
    content += '</div>';
    document.getElementById('panelContent').innerHTML = content;
}

// Zoom to country
function zoomToCountry(countryKey) {
    const country = mapData.countries[countryKey];
    if (country.bounds) {
        map.fitBounds(country.bounds, { padding: [50, 50] });
    } else {
        map.setView(country.coords, country.zoomThreshold || 5);
    }
}

// Show recipe detail (placeholder)
function showRecipeDetail(country, recipe) {
    // In future: open external recipe link or show modal
    window.open(`https://www.google.com/search?q=${recipe}+recipe`, '_blank');
}

// Close panel
function closePanel() {
    document.getElementById('sidePanel').classList.remove('active');
}

// Search functionality
document.getElementById('searchInput')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const query = e.target.value.toLowerCase();
        
        // Search countries
        for (const [key, country] of Object.entries(mapData.countries)) {
            if (country.name.toLowerCase().includes(query)) {
                map.setView(country.coords, 5);
                showCountryRecipes(key);
                return;
            }
        }
        
        // Search regions
        for (const [countryKey, regions] of Object.entries(mapData.regions)) {
            for (const [regionKey, region] of Object.entries(regions)) {
                if (region.name.toLowerCase().includes(query)) {
                    map.setView(region.coords, 7);
                    showRegionRecipes(countryKey, regionKey);
                    return;
                }
            }
        }
    }
});

// Initialize on load
document.addEventListener('DOMContentLoaded', initMap);