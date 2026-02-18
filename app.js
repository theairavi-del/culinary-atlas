// Culinary Atlas - Recipe Data
const countryRecipes = {
    italy: {
        name: "Italy",
        flag: "🇮🇹",
        cuisine: "Mediterranean Cuisine",
        recipes: [
            {
                name: "Pizza Margherita",
                description: "Classic Neapolitan pizza with fresh mozzarella, tomatoes, and basil",
                emoji: "🍕",
                link: "https://www.allrecipes.com/recipe/20171/quick-and-easy-pizza-crust/"
            },
            {
                name: "Pasta Carbonara",
                description: "Creamy pasta with eggs, Pecorino Romano, guanciale, and black pepper",
                emoji: "🍝",
                link: "https://www.allrecipes.com/recipe/11973/spaghetti-carbonara-ii/"
            },
            {
                name: "Tiramisu",
                description: "Coffee-flavored Italian dessert with layers of mascarpone and ladyfingers",
                emoji: "🍰",
                link: "https://www.allrecipes.com/recipe/21412/tiramisu-ii/"
            },
            {
                name: "Risotto alla Milanese",
                description: "Creamy saffron risotto from Milan with butter and Parmesan",
                emoji: "🍚",
                link: "https://www.allrecipes.com/recipe/85389/risotto-alla-milanese/"
            },
            {
                name: "Osso Buco",
                description: "Braised veal shanks in white wine and broth, served with gremolata",
                emoji: "🍖",
                link: "https://www.allrecipes.com/recipe/14685/osso-buco/"
            }
        ],
        coords: [42.5, 12.5]
    },
    mexico: {
        name: "Mexico",
        flag: "🇲🇽",
        cuisine: "Mexican Cuisine",
        recipes: [
            {
                name: "Tacos al Pastor",
                description: "Spit-grilled pork tacos with pineapple, onions, and cilantro",
                emoji: "🌮",
                link: "https://www.allrecipes.com/recipe/257067/tacos-al-pastor/"
            },
            {
                name: "Guacamole",
                description: "Fresh avocado dip with lime, cilantro, onions, and jalapeño",
                emoji: "🥑",
                link: "https://www.allrecipes.com/recipe/14231/guacamole/"
            },
            {
                name: "Enchiladas",
                description: "Corn tortillas filled with meat, covered in chili sauce and cheese",
                emoji: "🌯",
                link: "https://www.allrecipes.com/recipe/83557/chicken-enchiladas-ii/"
            },
            {
                name: "Chiles en Nogada",
                description: "Stuffed poblano peppers with walnut sauce and pomegranate",
                emoji: "🌶️",
                link: "https://www.allrecipes.com/recipe/213658/chiles-en-nogada/"
            },
            {
                name: "Tamales",
                description: "Steamed corn dough with savory or sweet fillings in corn husks",
                emoji: "🫔",
                link: "https://www.allrecipes.com/recipe/21668/real-homemade-tamales/"
            }
        ],
        coords: [23.5, -102.5]
    },
    japan: {
        name: "Japan",
        flag: "🇯🇵",
        cuisine: "Japanese Cuisine",
        recipes: [
            {
                name: "Sushi",
                description: "Vinegared rice with fresh fish, seafood, or vegetables",
                emoji: "🍣",
                link: "https://www.allrecipes.com/recipe/189477/sushi-roll/"
            },
            {
                name: "Ramen",
                description: "Wheat noodles in rich broth with toppings like chashu pork and egg",
                emoji: "🍜",
                link: "https://www.allrecipes.com/recipe/246631/easy-homemade-ramen/"
            },
            {
                name: "Tempura",
                description: "Lightly battered and deep-fried seafood and vegetables",
                emoji: "🍤",
                link: "https://www.allrecipes.com/recipe/12838/shrimp-tempura/"
            },
            {
                name: "Katsu Curry",
                description: "Breaded pork cutlet served with Japanese curry and rice",
                emoji: "🍛",
                link: "https://www.allrecipes.com/recipe/246866/japanese-curry/"
            },
            {
                name: "Matcha Tea",
                description: "Finely ground green tea powder, traditionally prepared in ceremony",
                emoji: "🍵",
                link: "https://www.allrecipes.com/recipe/160912/traditional-matcha-tea/"
            }
        ],
        coords: [36.5, 138.0]
    },
    india: {
        name: "India",
        flag: "🇮🇳",
        cuisine: "Indian Cuisine",
        recipes: [
            {
                name: "Butter Chicken",
                description: "Creamy tomato-based curry with tender chicken pieces",
                emoji: "🍗",
                link: "https://www.allrecipes.com/recipe/246628/butter-chicken/"
            },
            {
                name: "Biryani",
                description: "Fragrant rice dish layered with spiced meat and saffron",
                emoji: "🍚",
                link: "https://www.allrecipes.com/recipe/161934/chicken-biryani/"
            },
            {
                name: "Naan Bread",
                description: "Soft, leavened flatbread baked in a tandoor oven",
                emoji: "🫓",
                link: "https://www.allrecipes.com/recipe/14522/naan/"
            },
            {
                name: "Samosa",
                description: "Crispy fried pastry filled with spiced potatoes and peas",
                emoji: "🥟",
                link: "https://www.allrecipes.com/recipe/53396/samosas/"
            },
            {
                name: "Tandoori Chicken",
                description: "Chicken marinated in yogurt and spices, roasted in tandoor",
                emoji: "🍖",
                link: "https://www.allrecipes.com/recipe/53391/tandoori-chicken-ii/"
            }
        ],
        coords: [22.5, 79.0]
    },
    france: {
        name: "France",
        flag: "🇫🇷",
        cuisine: "French Cuisine",
        recipes: [
            {
                name: "Croissants",
                description: "Buttery, flaky pastry in a crescent shape",
                emoji: "🥐",
                link: "https://www.allrecipes.com/recipe/16580/croissants/"
            },
            {
                name: "Coq au Vin",
                description: "Chicken braised with wine, mushrooms, and bacon",
                emoji: "🍗",
                link: "https://www.allrecipes.com/recipe/16325/coq-au-vin/"
            },
            {
                name: "Ratatouille",
                description: "Provençal vegetable stew with zucchini, eggplant, and tomatoes",
                emoji: "🍲",
                link: "https://www.allrecipes.com/recipe/222006/disneys-ratatouille/"
            },
            {
                name: "Crème Brûlée",
                description: "Rich custard with caramelized sugar crust",
                emoji: "🍮",
                link: "https://www.allrecipes.com/recipe/19165/creme-brulee/"
            },
            {
                name: "French Onion Soup",
                description: "Caramelized onion soup topped with melted cheese",
                emoji: "🧅",
                link: "https://www.allrecipes.com/recipe/13351/rich-and-simple-french-onion-soup/"
            }
        ],
        coords: [46.5, 2.2]
    },
    thailand: {
        name: "Thailand",
        flag: "🇹🇭",
        cuisine: "Thai Cuisine",
        recipes: [
            {
                name: "Pad Thai",
                description: "Stir-fried rice noodles with eggs, peanuts, and tamarind sauce",
                emoji: "🍜",
                link: "https://www.allrecipes.com/recipe/222658/pad-thai/"
            },
            {
                name: "Green Curry",
                description: "Spicy curry with coconut milk, Thai basil, and vegetables",
                emoji: "🍛",
                link: "https://www.allrecipes.com/recipe/165190/thai-green-curry-chicken/"
            },
            {
                name: "Tom Yum Soup",
                description: "Hot and sour soup with shrimp, lemongrass, and lime",
                emoji: "🥣",
                link: "https://www.allrecipes.com/recipe/143069/the-best-thai-coconut-soup/"
            },
            {
                name: "Mango Sticky Rice",
                description: "Sweet sticky rice with fresh mango and coconut cream",
                emoji: "🥭",
                link: "https://www.allrecipes.com/recipe/15382/thai-sweet-sticky-rice-with-mango/"
            },
            {
                name: "Thai Iced Tea",
                description: "Strong brewed tea with condensed milk served over ice",
                emoji: "🧋",
                link: "https://www.allrecipes.com/recipe/222901/thai-iced-tea/"
            }
        ],
        coords: [15.0, 100.5]
    },
    usa: {
        name: "United States",
        flag: "🇺🇸",
        cuisine: "American Cuisine",
        recipes: [
            {
                name: "Classic Burger",
                description: "Juicy beef patty with cheese, lettuce, tomato, and special sauce",
                emoji: "🍔",
                link: "https://www.allrecipes.com/recipe/72657/best-burger-ever/"
            },
            {
                name: "BBQ Ribs",
                description: "Slow-cooked pork ribs with smoky barbecue sauce",
                emoji: "🍖",
                link: "https://www.allrecipes.com/recipe/16496/slow-cooker-baby-back-ribs/"
            },
            {
                name: "Apple Pie",
                description: "Classic double-crust pie with cinnamon-spiced apples",
                emoji: "🥧",
                link: "https://www.allrecipes.com/recipe/12682/apple-pie/"
            },
            {
                name: "Mac & Cheese",
                description: "Creamy baked pasta with cheddar and breadcrumbs",
                emoji: "🧀",
                link: "https://www.allrecipes.com/recipe/11679/homemade-mac-and-cheese/"
            },
            {
                name: "Fried Chicken",
                description: "Crispy, golden-fried chicken with southern spices",
                emoji: "🍗",
                link: "https://www.allrecipes.com/recipe/8805/crispy-fried-chicken/"
            }
        ],
        coords: [39.8, -98.5]
    },
    china: {
        name: "China",
        flag: "🇨🇳",
        cuisine: "Chinese Cuisine",
        recipes: [
            {
                name: "Kung Pao Chicken",
                description: "Spicy stir-fried chicken with peanuts and vegetables",
                emoji: "🥘",
                link: "https://www.allrecipes.com/recipe/19202/kung-pao-chicken/"
            },
            {
                name: "Dim Sum",
                description: "Small bite-sized portions of food served in steamer baskets",
                emoji: "🥟",
                link: "https://www.allrecipes.com/recipe/14758/chinese-steamed-buns/"
            },
            {
                name: "Fried Rice",
                description: "Wok-tossed rice with eggs, vegetables, and soy sauce",
                emoji: "🍚",
                link: "https://www.allrecipes.com/recipe/79543/fried-rice/"
            },
            {
                name: "Peking Duck",
                description: "Crispy roasted duck served with pancakes and hoisin sauce",
                emoji: "🦆",
                link: "https://www.allrecipes.com/recipe/20455/peking-duck/"
            },
            {
                name: "Hot Pot",
                description: "Communal cooking in simmering broth with various ingredients",
                emoji: "🍲",
                link: "https://www.allrecipes.com/recipe/246866/chinese-hot-pot/"
            }
        ],
        coords: [35.0, 104.0]
    },
    greece: {
        name: "Greece",
        flag: "🇬🇷",
        cuisine: "Mediterranean Cuisine",
        recipes: [
            {
                name: "Moussaka",
                description: "Layered eggplant and potato casserole with ground meat",
                emoji: "🍆",
                link: "https://www.allrecipes.com/recipe/19649/moussaka/"
            },
            {
                name: "Souvlaki",
                description: "Grilled meat skewers served with pita and tzatziki",
                emoji: "🍢",
                link: "https://www.allrecipes.com/recipe/14713/souvlaki/"
            },
            {
                name: "Baklava",
                description: "Sweet pastry with layers of phyllo, nuts, and honey syrup",
                emoji: "🥮",
                link: "https://www.allrecipes.com/recipe/20287/greek-baklava/"
            },
            {
                name: "Greek Salad",
                description: "Fresh tomatoes, cucumbers, olives, and feta with olive oil",
                emoji: "🥗",
                link: "https://www.allrecipes.com/recipe/14373/greek-salad-i/"
            },
            {
                name: "Gyros",
                description: "Rotisserie meat wrapped in pita with vegetables and sauce",
                emoji: "🌯",
                link: "https://www.allrecipes.com/recipe/221309/traditional-gyros/"
            }
        ],
        coords: [39.0, 22.0]
    },
    spain: {
        name: "Spain",
        flag: "🇪🇸",
        cuisine: "Spanish Cuisine",
        recipes: [
            {
                name: "Paella",
                description: "Saffron rice dish with seafood, meat, and vegetables",
                emoji: "🥘",
                link: "https://www.allrecipes.com/recipe/21059/paella-i/"
            },
            {
                name: "Gazpacho",
                description: "Cold tomato soup with cucumber, pepper, and garlic",
                emoji: "🥣",
                link: "https://www.allrecipes.com/recipe/22254/gazpacho/"
            },
            {
                name: "Churros",
                description: "Fried dough pastries served with thick hot chocolate",
                emoji: "🥨",
                link: "https://www.allrecipes.com/recipe/41767/churros/"
            },
            {
                name: "Tortilla Española",
                description: "Spanish omelette with potatoes and onions",
                emoji: "🍳",
                link: "https://www.allrecipes.com/recipe/221893/tortilla-espanola/"
            },
            {
                name: "Sangria",
                description: "Fruity wine punch with fresh fruit and brandy",
                emoji: "🍷",
                link: "https://www.allrecipes.com/recipe/72612/sangria/"
            }
        ],
        coords: [40.0, -4.0]
    },
    brazil: {
        name: "Brazil",
        flag: "🇧🇷",
        cuisine: "Brazilian Cuisine",
        recipes: [
            {
                name: "Feijoada",
                description: "Black bean stew with pork, beef, and sausage",
                emoji: "🍲",
                link: "https://www.allrecipes.com/recipe/130261/brazilian-feijoada/"
            },
            {
                name: "Churrasco",
                description: "Brazilian barbecue with various grilled meats",
                emoji: "🍖",
                link: "https://www.allrecipes.com/recipe/221934/churrasco/"
            },
            {
                name: "Brigadeiro",
                description: "Chocolate fudge balls made with condensed milk",
                emoji: "🍫",
                link: "https://www.allrecipes.com/recipe/214193/brigadeiro/"
            },
            {
                name: "Acai Bowl",
                description: "Frozen acai berry smoothie bowl with granola and fruit",
                emoji: "🫐",
                link: "https://www.allrecipes.com/recipe/244562/acai-bowl/"
            },
            {
                name: "Pão de Queijo",
                description: "Chewy cheese bread balls made with tapioca flour",
                emoji: "🧀",
                link: "https://www.allrecipes.com/recipe/98352/pao-de-queijo/"
            }
        ],
        coords: [-14.2, -51.9]
    },
    vietnam: {
        name: "Vietnam",
        flag: "🇻🇳",
        cuisine: "Vietnamese Cuisine",
        recipes: [
            {
                name: "Pho",
                description: "Aromatic beef noodle soup with herbs and lime",
                emoji: "🍜",
                link: "https://www.allrecipes.com/recipe/228443/authentic-pho/"
            },
            {
                name: "Banh Mi",
                description: "French-Vietnamese sandwich with meat, pickles, and cilantro",
                emoji: "🥖",
                link: "https://www.allrecipes.com/recipe/187342/banh-mi/"
            },
            {
                name: "Spring Rolls",
                description: "Fresh rice paper rolls with shrimp, herbs, and vermicelli",
                emoji: "🫔",
                link: "https://www.allrecipes.com/recipe/24239/vietnamese-spring-rolls/"
            },
            {
                name: "Vietnamese Coffee",
                description: "Strong drip coffee with sweet condensed milk",
                emoji: "☕",
                link: "https://www.allrecipes.com/recipe/223397/vietnamese-iced-coffee/"
            },
            {
                name: "Banh Xeo",
                description: "Crispy turmeric crepes with shrimp and bean sprouts",
                emoji: "🥞",
                link: "https://www.allrecipes.com/recipe/247159/banh-xeo/"
            }
        ],
        coords: [14.0, 108.3]
    },
    morocco: {
        name: "Morocco",
        flag: "🇲🇦",
        cuisine: "North African Cuisine",
        recipes: [
            {
                name: "Tagine",
                description: "Slow-cooked stew with meat, vegetables, and dried fruits",
                emoji: "🍲",
                link: "https://www.allrecipes.com/recipe/189821/chicken-tagine/"
            },
            {
                name: "Couscous",
                description: "Steamed semolina grains with vegetables and meat",
                emoji: "🌾",
                link: "https://www.allrecipes.com/recipe/16858/couscous/"
            },
            {
                name: "Harira",
                description: "Hearty tomato-based soup with lentils and chickpeas",
                emoji: "🥣",
                link: "https://www.allrecipes.com/recipe/212942/moroccan-harira/"
            },
            {
                name: "Mint Tea",
                description: "Sweet green tea with fresh mint leaves",
                emoji: "🍵",
                link: "https://www.allrecipes.com/recipe/17027/moroccan-mint-tea/"
            },
            {
                name: "Pastilla",
                description: "Sweet and savory chicken pie with filo dough",
                emoji: "🥧",
                link: "https://www.allrecipes.com/recipe/202746/moroccan-pastilla/"
            }
        ],
        coords: [31.8, -7.1]
    },
    lebanon: {
        name: "Lebanon",
        flag: "🇱🇧",
        cuisine: "Levantine Cuisine",
        recipes: [
            {
                name: "Hummus",
                description: "Creamy chickpea dip with tahini, lemon, and garlic",
                emoji: "🫘",
                link: "https://www.allrecipes.com/recipe/23223/best-hummus/"
            },
            {
                name: "Falafel",
                description: "Deep-fried chickpea patties served in pita",
                emoji: "🧆",
                link: "https://www.allrecipes.com/recipe/18465/seans-falafel/"
            },
            {
                name: "Tabbouleh",
                description: "Fresh parsley and bulgur salad with tomatoes and mint",
                emoji: "🥗",
                link: "https://www.allrecipes.com/recipe/16678/tabbouleh-ii/"
            },
            {
                name: "Shawarma",
                description: "Spit-roasted meat wrapped in flatbread with tahini",
                emoji: "🌯",
                link: "https://www.allrecipes.com/recipe/222233/chicken-shawarma/"
            },
            {
                name: "Baklava",
                description: "Layered phyllo pastry with nuts and rose water syrup",
                emoji: "🥮",
                link: "https://www.allrecipes.com/recipe/20283/easy-baklava/"
            }
        ],
        coords: [33.9, 35.9]
    },
    korea: {
        name: "South Korea",
        flag: "🇰🇷",
        cuisine: "Korean Cuisine",
        recipes: [
            {
                name: "Kimchi",
                description: "Fermented vegetables, mainly napa cabbage and radishes",
                emoji: "🥬",
                link: "https://www.allrecipes.com/recipe/12984/kimchi/"
            },
            {
                name: "Bibimbap",
                description: "Rice bowl with vegetables, meat, egg, and gochujang",
                emoji: "🍚",
                link: "https://www.allrecipes.com/recipe/228240/bibimbap/"
            },
            {
                name: "Korean BBQ",
                description: "Grilled marinated meat, often cooked at the table",
                emoji: "🥓",
                link: "https://www.allrecipes.com/recipe/96698/bulgogi/"
            },
            {
                name: "Tteokbokki",
                description: "Spicy rice cakes in sweet and spicy red sauce",
                emoji: "🍢",
                link: "https://www.allrecipes.com/recipe/246551/tteokbokki/"
            },
            {
                name: "Korean Fried Chicken",
                description: "Ultra crispy chicken with sweet and spicy glaze",
                emoji: "🍗",
                link: "https://www.allrecipes.com/recipe/221839/korean-fried-chicken/"
            }
        ],
        coords: [36.5, 127.9]
    }
};

// Simple GeoJSON for country boundaries (simplified)
const countryBoundaries = {
    italy: [[47.1, 6.6], [47.1, 18.5], [35.5, 18.5], [35.5, 6.6]],
    mexico: [[32.7, -117.0], [32.7, -86.7], [14.5, -86.7], [14.5, -117.0]],
    japan: [[45.5, 129.4], [45.5, 145.8], [24.4, 145.8], [24.4, 129.4]],
    india: [[35.5, 68.1], [35.5, 97.4], [6.7, 97.4], [6.7, 68.1]],
    france: [[51.1, -5.1], [51.1, 9.6], [42.3, 9.6], [42.3, -5.1]],
    thailand: [[20.4, 97.3], [20.4, 105.6], [5.6, 105.6], [5.6, 97.3]],
    usa: [[49.4, -125.0], [49.4, -66.9], [24.5, -66.9], [24.5, -125.0]],
    china: [[53.6, 73.5], [53.6, 134.8], [18.1, 134.8], [18.1, 73.5]],
    greece: [[41.7, 19.4], [41.7, 28.2], [34.8, 28.2], [34.8, 19.4]],
    spain: [[43.8, -9.3], [43.8, 4.3], [36.0, 4.3], [36.0, -9.3]],
    brazil: [[5.3, -73.9], [5.3, -34.8], [-33.7, -34.8], [-33.7, -73.9]],
    vietnam: [[23.4, 102.1], [23.4, 109.5], [8.6, 109.5], [8.6, 102.1]],
    morocco: [[35.9, -13.2], [35.9, -1.0], [27.7, -1.0], [27.7, -13.2]],
    lebanon: [[34.7, 35.1], [34.7, 36.6], [33.1, 36.6], [33.1, 35.1]],
    korea: [[38.6, 124.6], [38.6, 131.0], [33.1, 131.0], [33.1, 124.6]]
};

let map;
let currentLayer = null;

// Initialize map
function initMap() {
    map = L.map('map', {
        center: [20, 0],
        zoom: 2,
        minZoom: 2,
        maxZoom: 8,
        worldCopyJump: true
    });

    // Dark themed tiles
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    // Add country markers/polygons
    Object.keys(countryRecipes).forEach(countryKey => {
        const country = countryRecipes[countryKey];
        const coords = country.coords;
        
        // Create custom marker
        const marker = L.marker(coords, {
            icon: L.divIcon({
                className: 'custom-marker',
                html: `<div style="font-size: 32px; cursor: pointer; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));">${country.flag}</div>`,
                iconSize: [40, 40],
                iconAnchor: [20, 20]
            })
        }).addTo(map);

        // Add popup
        marker.bindPopup(`
            <div class="popup-country">${country.name} ${country.flag}</div>
            <div class="popup-text">${country.cuisine}</div>
            <div class="popup-click">Click to view recipes →</div>
        `, {
            closeButton: false,
            offset: [0, -10]
        });

        // Click handler
        marker.on('click', () => {
            showCountryRecipes(countryKey);
        });
    });
}

// Show country recipes
function showCountryRecipes(countryKey) {
    const country = countryRecipes[countryKey];
    if (!country) return;

    // Update panel content
    document.getElementById('countryFlag').textContent = country.flag;
    document.getElementById('countryName').textContent = country.name;
    document.getElementById('recipeCount').textContent = `${country.recipes.length} recipes`;
    document.getElementById('cuisineType').textContent = country.cuisine;

    // Build recipe cards
    const recipesGrid = document.getElementById('recipesGrid');
    recipesGrid.innerHTML = country.recipes.map(recipe => `
        <div class="recipe-card" onclick="window.open('${recipe.link}', '_blank')">
            <div class="recipe-image">${recipe.emoji}</div>
            <div class="recipe-content">
                <h3 class="recipe-title">${recipe.name}</h3>
                <p class="recipe-desc">${recipe.description}</p>
                <span class="recipe-link">View Recipe →</span>
            </div>
        </div>
    `).join('');

    // Show panel
    document.getElementById('emptyState').style.display = 'none';
    document.getElementById('countryContent').style.display = 'block';
    document.getElementById('sidePanel').classList.add('active');

    // Close popup if open
    map.closePopup();
}

// Close panel
function closePanel() {
    document.getElementById('sidePanel').classList.remove('active');
}

// Dismiss welcome overlay
function dismissWelcome() {
    document.getElementById('welcomeOverlay').classList.add('hidden');
}

// Initialize on load
document.addEventListener('DOMContentLoaded', initMap);