// Culinary Atlas - 3D Globe with Authentic Regional Recipes
const globeData = {
    // Country-level markers
    countries: [
        { name: "Italy", lat: 41.9, lng: 12.5, flag: "IT", region: "Europe", population: "59M" },
        { name: "Japan", lat: 36.2, lng: 138.2, flag: "JP", region: "Asia", population: "125M" },
        { name: "Mexico", lat: 23.6, lng: -102.5, flag: "MX", region: "North America", population: "126M" },
        { name: "India", lat: 20.5, lng: 78.9, flag: "IN", region: "Asia", population: "1.4B" },
        { name: "France", lat: 46.2, lng: 2.2, flag: "FR", region: "Europe", population: "68M" },
        { name: "Thailand", lat: 15.8, lng: 100.9, flag: "TH", region: "Asia", population: "70M" },
        { name: "United States", lat: 37.0, lng: -95.7, flag: "US", region: "North America", population: "331M" },
        { name: "Spain", lat: 40.4, lng: -3.7, flag: "ES", region: "Europe", population: "47M" },
        { name: "Morocco", lat: 31.7, lng: -7.0, flag: "MA", region: "Africa", population: "37M" },
        { name: "Peru", lat: -9.1, lng: -75.0, flag: "PE", region: "South America", population: "33M" },
        { name: "Lebanon", lat: 33.8, lng: 35.9, flag: "LB", region: "Middle East", population: "6.8M" },
        { name: "Korea", lat: 35.9, lng: 127.7, flag: "KR", region: "Asia", population: "52M" },
        { name: "Greece", lat: 39.0, lng: 21.8, flag: "GR", region: "Europe", population: "10M" },
        { name: "Vietnam", lat: 14.0, lng: 108.2, flag: "VN", region: "Asia", population: "98M" },
        { name: "Brazil", lat: -14.2, lng: -51.9, flag: "BR", region: "South America", population: "215M" },
        { name: "Turkey", lat: 38.9, lng: 35.0, flag: "TR", region: "Middle East", population: "85M" },
        { name: "Indonesia", lat: -0.7, lng: 113.9, flag: "ID", region: "Asia", population: "276M" },
        { name: "Ethiopia", lat: 9.1, lng: 40.4, flag: "ET", region: "Africa", population: "118M" },
        { name: "Portugal", lat: 39.3, lng: -8.2, flag: "PT", region: "Europe", population: "10M" },
        { name: "Iran", lat: 32.4, lng: 53.6, flag: "IR", region: "Middle East", population: "87M" }
    ],

    // Detailed regional recipes - authentic and rare
    recipes: {
        "Italy": {
            region: "Mediterranean",
            dishes: [
                {
                    name: "Cjarsons",
                    origin: "Friuli-Venezia Giulia",
                    description: "Rare sweet-savory ravioli filled with herbs, dried fruit, and chocolate, served with butter and smoked ricotta",
                    rarity: "rare",
                    links: [
                        { site: "Giallo Zafferano", url: "https://www.giallozafferano.com/recipes/Cjarsons.html" },
                        { site: "La Cucina Italiana", url: "https://www.lacucinaitaliana.com/recipe/cjarsons" }
                    ]
                },
                {
                    name: "Timballo di Maccheroni",
                    origin: "Abruzzo",
                    description: "Elaborate baked pasta dome wrapped in pastry, layered with meatballs, hard-boiled eggs, and cheese",
                    rarity: "rare",
                    links: [
                        { site: "Accademia Italiana", url: "https://www.accademiaitaliana.com/timballo" }
                    ]
                },
                {
                    name: "Bagna Cauda",
                    origin: "Piemonte",
                    description: "Warm garlic-anchovy dipping sauce served with raw vegetables, a centuries-old tradition",
                    rarity: "traditional",
                    links: [
                        { site: "Piemonte Tourism", url: "https://www.piemonteitalia.eu/en/bagna-cauda" }
                    ]
                },
                {
                    name: "Cassoeula",
                    origin: "Lombardia",
                    description: "Hearty pork and cabbage stew, a winter tradition in Milan dating back to the 16th century",
                    rarity: "traditional",
                    links: [
                        { site: "Taste Atlas", url: "https://www.tasteatlas.com/cassoeula" }
                    ]
                },
                {
                    name: "Stroncatura",
                    origin: "Calabria",
                    description: "Pasta made from wheat floor sweepings, now a delicacy with anchovies and breadcrumbs",
                    rarity: "rare",
                    links: [
                        { site: "Calabria Region", url: "https://www.regione.calabria.it/cucina/strongulature" }
                    ]
                }
            ]
        },
        "Japan": {
            region: "East Asian",
            dishes: [
                {
                    name: "Jibuni",
                    origin: "Kanazawa, Ishikawa",
                    description: "Duck and wheat gluten stew with root vegetables, a 300-year-old samurai dish",
                    rarity: "rare",
                    links: [
                        { site: "JNTO", url: "https://www.jnto.go.jp/eng/regional/kanazawa/jibuni.html" }
                    ]
                },
                {
                    name: "Wanko Soba",
                    origin: "Morioka, Iwate",
                    description: "Competitive noodle-eating tradition with small bowls served continuously until you cover your bowl",
                    rarity: "rare",
                    links: [
                        { site: "Visit Iwate", url: "https://www.visit-iwate.com/en/food/wanko-soba" }
                    ]
                },
                {
                    name: "Dote-ni",
                    origin: "Hiroshima",
                    description: "Slow-braised beef tendon and daikon in miso, a post-war comfort food",
                    rarity: "regional",
                    links: [
                        { site: "Hiroshima Tourism", url: "https://www.visithiroshima.net/food/doteni" }
                    ]
                },
                {
                    name: "Kiritanpo",
                    origin: "Akita",
                    description: "Pounded rice cylinders grilled over charcoal, served in hot pot with Hinai chicken",
                    rarity: "rare",
                    links: [
                        { site: "Akita Prefecture", url: "https://www.pref.akita.lg.jp/kiritanpo" }
                    ]
                },
                {
                    name: "Izumo Soba",
                    origin: "Izumo, Shimane",
                    description: "Dark, aromatic soba served in three-tiered lacquerware with unique dipping tradition",
                    rarity: "regional",
                    links: [
                        { site: "Shimane Tourism", url: "https://www.kankou-shimane.com/en/destinations/20806" }
                    ]
                }
            ]
        },
        "Mexico": {
            region: "Mesoamerican",
            dishes: [
                {
                    name: "Chiles en Nogada",
                    origin: "Puebla",
                    description: "Pre-Hispanic dish of poblano peppers with picadillo, topped with walnut cream and pomegranate - Mexico's national dish",
                    rarity: "traditional",
                    links: [
                        { site: "Mexico en la Cocina", url: "https://www.mexicoenlacocina.com/chiles-en-nogada-receta-autentica" }
                    ]
                },
                {
                    name: "Zacahuil",
                    origin: "Huasteca Region",
                    description: "Giant tamale (up to 1.5 meters) cooked underground for celebrations, wrapped in banana leaves",
                    rarity: "rare",
                    links: [
                        { site: "Cocina Vital", url: "https://cocinavital.mx/receta/zacahuil-tamal-gigante" }
                    ]
                },
                {
                    name: "Tamales de Cazuela",
                    origin: "Chiapas",
                    description: "Corn masa cooked in clay pot with pork, wrapped in hoja santa leaves instead of corn husks",
                    rarity: "rare",
                    links: [
                        { site: "Chiapas Travel", url: "https://www.chiapas.gob.mx/turismo/gastronomia" }
                    ]
                },
                {
                    name: "Pibipollo",
                    origin: "Yucatán",
                    description: "Maya tamale baked underground with achiote chicken and xpelón beans for Hanal Pixán",
                    rarity: "traditional",
                    links: [
                        { site: "Yucatan Today", url: "https://www.yucatantoday.com/en/topics/pibipollo" }
                    ]
                },
                {
                    name: "Mole de Olla",
                    origin: "Central Mexico",
                    description: "Rustic beef and vegetable stew with xoconostle cactus fruit and guajillo chiles",
                    rarity: "traditional",
                    links: [
                        { site: "Recetas Mexicanas", url: "https://www.recetas-mexicanas.com/mole-de-olla" }
                    ]
                }
            ]
        },
        "India": {
            region: "South Asian",
            dishes: [
                {
                    name: "Dhokla",
                    origin: "Gujarat",
                    description: "Steamed fermented rice and chickpea flour cake, light and fluffy breakfast staple",
                    rarity: "traditional",
                    links: [
                        { site: "Gujarat Tourism", url: "https://www.gujarattourism.com/food/dhokla.html" }
                    ]
                },
                {
                    name: "Champaran Mutton",
                    origin: "Bihar",
                    description: "Slow-cooked mutton in sealed clay pot (ahuna style) with whole spices, 2-hour preparation",
                    rarity: "regional",
                    links: [
                        { site: "Bihar Tourism", url: "https://tourism.bihar.gov.in/champaran-mutton" }
                    ]
                },
                {
                    name: "Modur Pulav",
                    origin: "Kashmir",
                    description: "Sweet saffron rice with nuts, dried fruits, and Kashmiri spices - a Wazwan delicacy",
                    rarity: "rare",
                    links: [
                        { site: "Kashmir Food", url: "https://www.kashmirfood.com/modur-pulav" }
                    ]
                },
                {
                    name: "Khar",
                    origin: "Assam",
                    description: "Unique alkali preparation using banana peel ash, with papaya and black gram",
                    rarity: "rare",
                    links: [
                        { site: "Assam Tourism", url: "https://tourism.assam.gov.in/khar" }
                    ]
                },
                {
                    name: "Dhuska",
                    origin: "Jharkhand",
                    description: "Deep-fried rice and lentil batter pancakes served with mutton curry",
                    rarity: "rare",
                    links: [
                        { site: "Jharkhand Cuisine", url: "https://jharkhand.gov.in/tourism/dhuska" }
                    ]
                }
            ]
        },
        "France": {
            region: "Western European",
            dishes: [
                {
                    name: "Cassoulet de Castelnaudary",
                    origin: "Languedoc",
                    description: "Authentic white bean and duck confit stew, slow-cooked in traditional earthenware",
                    rarity: "traditional",
                    links: [
                        { site: "France.fr", url: "https://www.france.fr/en/article/cassoulet-castelnaudary" }
                    ]
                },
                {
                    name: "Poulet de Bresse",
                    origin: "Bresse",
                    description: "AOC-protected blue-footed chicken, considered the finest in France",
                    rarity: "rare",
                    links: [
                        { site: "Bresse Tourism", url: "https://www.bresse-bourguignonne.com/poulet-bresse" }
                    ]
                },
                {
                    name: "Soupe aux Cailloux",
                    origin: "Provence",
                    description: "Traditional stone soup with white beans, vegetables, and pork skin",
                    rarity: "rare",
                    links: [
                        { site: "Provence Guide", url: "https://provenceguide.com/cuisine/soupe-cailloux" }
                    ]
                },
                {
                    name: "Tarte Tropézienne",
                    origin: "Saint-Tropez",
                    description: "Brioche filled with orange-blossom cream, created for Brigitte Bardot",
                    rarity: "regional",
                    links: [
                        { site: "Côte d'Azur", url: "https://www.cotedazurfrance.fr/tarte-tropezienne" }
                    ]
                },
                {
                    name: "Baeckeoffe",
                    origin: "Alsace",
                    description: "Marinated meat and potato casserole cooked with Alsace white wine in sealed ceramic",
                    rarity: "traditional",
                    links: [
                        { site: "Alsace Tourism", url: "https://www.tourisme-alsace.com/baeckeoffe" }
                    ]
                }
            ]
        },
        "Thailand": {
            region: "Southeast Asian",
            dishes: [
                {
                    name: "Khao Soi",
                    origin: "Chiang Mai, Northern Thailand",
                    description: "Burmese-influenced coconut curry noodles with pickled mustard greens and crispy noodles on top",
                    rarity: "regional",
                    links: [
                        { site: "Tourism Thailand", url: "https://www.tourismthailand.org/khao-soi" }
                    ]
                },
                {
                    name: "Laab Kua",
                    origin: "Northern Thailand",
                    description: "Cooked version of laab with blood, organs, and toasted rice powder - rare and intense",
                    rarity: "rare",
                    links: [
                        { site: "Thai Food", url: "https://www.thaifood.com/laab-kua" }
                    ]
                },
                {
                    name: "Nam Prik Kungsot",
                    origin: "Central Thailand",
                    description: "Charcoal-roasted shrimp paste chili dip with rare freshwater prawns",
                    rarity: "rare",
                    links: [
                        { site: "Thai PBS", url: "https://www.thaipbs.or.th/nam-prik-kungsot" }
                    ]
                },
                {
                    name: "Gaeng Tai Pla",
                    origin: "Southern Thailand",
                    description: "Fermented fish innards curry, intensely flavored and pungent",
                    rarity: "rare",
                    links: [
                        { site: "Phuket Tourism", url: "https://www.phuket.com/food/gaeng-tai-pla" }
                    ]
                },
                {
                    name: "Khao Chae",
                    origin: "Central Thailand",
                    description: "Jasmine rice in iced jasmine water with side dishes, royal summer tradition",
                    rarity: "traditional",
                    links: [
                        { site: "Bangkok Post", url: "https://www.bangkokpost.com/khao-chae" }
                    ]
                }
            ]
        },
        "United States": {
            region: "North American",
            dishes: [
                {
                    name: "Sonoran Hot Dog",
                    origin: "Tucson, Arizona",
                    description: "Bacon-wrapped hot dog with pinto beans, onions, tomatoes, mayo, mustard, and jalapeño sauce",
                    rarity: "regional",
                    links: [
                        { site: "Visit Tucson", url: "https://www.visittucson.org/sonoran-hot-dog" }
                    ]
                },
                {
                    name: "Lutefisk",
                    origin: "Scandinavian-American Midwest",
                    description: "Lye-treated dried whitefish, traditional Christmas dish in Minnesota and Wisconsin",
                    rarity: "rare",
                    links: [
                        { site: "Minnesota Historical Society", url: "https://www.mnhs.org/lutefisk" }
                    ]
                },
                {
                    name: "Chile Verde",
                    origin: "New Mexico",
                    description: "Hatch green chile stew with pork, official state question: Red or Green?",
                    rarity: "regional",
                    links: [
                        { site: "New Mexico Tourism", url: "https://www.newmexico.org/chile-verde" }
                    ]
                },
                {
                    name: "Cincinnati Chili",
                    origin: "Cincinnati, Ohio",
                    description: "Macedonian-inspired meat sauce over spaghetti with chocolate and cinnamon",
                    rarity: "regional",
                    links: [
                        { site: "Cincy USA", url: "https://www.cincinnatiusa.com/chili" }
                    ]
                },
                {
                    name: "Lowcountry Boil",
                    origin: "South Carolina/Georgia Coast",
                    description: "Frogmore Stew with shrimp, corn, potatoes, sausage - Gullah Geechee tradition",
                    rarity: "traditional",
                    links: [
                        { site: "SC Tourism", url: "https://discoversouthcarolina.com/lowcountry-boil" }
                    ]
                }
            ]
        },
        "Morocco": {
            region: "North African",
            dishes: [
                {
                    name: "Pastilla/Bastilla",
                    origin: "Fez",
                    description: "Sweet and savory pigeon pie with cinnamon, sugar, and almonds in warqa pastry",
                    rarity: "traditional",
                    links: [
                        { site: "Visit Morocco", url: "https://www.visitmorocco.com/pastilla" }
                    ]
                },
                {
                    name: "Tanjia",
                    origin: "Marrakech",
                    description: "Slow-cooked lamb in earthenware urn buried in hammam furnace ashes",
                    rarity: "traditional",
                    links: [
                        { site: "Marrakech Tourism", url: "https://www.marrakech-tourism.com/tanjia" }
                    ]
                },
                {
                    name: "Rfissa",
                    origin: "Morocco",
                    description: "Festive chicken and lentil dish over shredded msemen pancakes with fenugreek",
                    rarity: "traditional",
                    links: [
                        { site: "Moroccan Food", url: "https://www.moroccanfood.com/rfissa" }
                    ]
                },
                {
                    name: "Medfouna",
                    origin: "Sahara Desert (Rissani)",
                    description: "Sahara pizza - stuffed bread with meat, almonds, and spices baked in sand",
                    rarity: "rare",
                    links: [
                        { site: "Morocco Tourism", url: "https://www.tourism-in-morocco.com/medfouna" }
                    ]
                },
                {
                    name: "Babbouche",
                    origin: "Coastal Morocco",
                    description: "Snail soup with 15+ spices, served from street carts",
                    rarity: "traditional",
                    links: [
                        { site: "Morocco World News", url: "https://www.moroccoworldnews.com/babbouche" }
                    ]
                }
            ]
        },
        "Peru": {
            region: "South American",
            dishes: [
                {
                    name: "Cuy Chactado",
                    origin: "Andean Highlands",
                    description: "Whole guinea pig flattened and deep-fried, served with potato and salsa",
                    rarity: "traditional",
                    links: [
                        { site: "PromPeru", url: "https://www.promperu.gob.pe/cuy-chactado" }
                    ]
                },
                {
                    name: "Juane",
                    origin: "Amazonas",
                    description: "Rice tamale with chicken, egg, and olive wrapped in bijao leaves for San Juan festival",
                    rarity: "regional",
                    links: [
                        { site: "Peru Travel", url: "https://www.peru.travel/juane" }
                    ]
                },
                {
                    name: "Chupe de Camarones",
                    origin: "Arequipa",
                    description: "Spicy shrimp chowder with cheese, milk, and rocoto pepper",
                    rarity: "regional",
                    links: [
                        { site: "Arequipa Tourism", url: "https://www.arequipa.gob.pe/chupe-camarones" }
                    ]
                },
                {
                    name: "Pachamanca",
                    origin: "Andes",
                    description: "Earth oven meal with marinated meat and vegetables cooked on hot stones underground",
                    rarity: "traditional",
                    links: [
                        { site: "Peru Culture", url: "https://www.cultura.gob.pe/pachamanca" }
                    ]
                },
                {
                    name: "Tacacho con Cecina",
                    origin: "San Martín",
                    description: "Smash-fried green plantain balls with dried, smoked pork",
                    rarity: "regional",
                    links: [
                        { site: "Peru Amazon", url: "https://www.peru-amazon.com/tacacho" }
                    ]
                }
            ]
        },
        "Lebanon": {
            region: "Levantine",
            dishes: [
                {
                    name: "Kibbeh Nayeh",
                    origin: "Mount Lebanon",
                    description: "Raw lamb tartare with bulgur and spices, considered the national dish",
                    rarity: "traditional",
                    links: [
                        { site: "Lebanon Tourism", url: "https://www.lebanontraveler.com/kibbeh-nayeh" }
                    ]
                },
                {
                    name: "Sfouf",
                    origin: "Beirut",
                    description: "Turmeric semolina cake with pine nuts, traditional Easter dessert",
                    rarity: "traditional",
                    links: [
                        { site: "Lebanese Recipes", url: "https://www.lebaneserecipes.com/sfouf" }
                    ]
                },
                {
                    name: "Kebbeh Kras",
                    origin: "North Lebanon",
                    description: "Large stuffed kibbeh with lamb, pine nuts, and pomegranate molasses",
                    rarity: "rare",
                    links: [
                        { site: "Taste of Beirut", url: "https://www.tasteofbeirut.com/kebbeh-kras" }
                    ]
                },
                {
                    name: "Moughrabieh",
                    origin: "Sidon",
                    description: "Couscous with chickpeas, caramelized onions, and chicken",
                    rarity: "regional",
                    links: [
                        { site: "Lebanon Ministry", url: "https://www.moct.gov.lb/moughrabieh" }
                    ]
                },
                {
                    name: "Maamoul",
                    origin: "Mountain Villages",
                    description: "Date or nut-filled semolina cookies for Eid",
                    rarity: "traditional",
                    links: [
                        { site: "Lebanese Food", url: "https://www.lebanesefood.com/maamoul" }
                    ]
                }
            ]
        },
        "Korea": {
            region: "East Asian",
            dishes: [
                {
                    name: "Sundae",
                    origin: "Throughout Korea",
                    description: "Blood sausage with glass noodles and vegetables, served with salt and chili",
                    rarity: "traditional",
                    links: [
                        { site: "KTO", url: "https://www.visitkorea.or.kr/sundae" }
                    ]
                },
                {
                    name: "Hoe",
                    origin: "Coastal Korea",
                    description: "Raw fish sashimi, eaten immediately after catch with gochujang",
                    rarity: "traditional",
                    links: [
                        { site: "Korean Food", url: "https://www.koreanfood.go.kr/hoe" }
                    ]
                },
                {
                    name: "Gamja Ongsimi",
                    origin: "Gangwon Province",
                    description: "Potato dumpling soup with vegetables, warming mountain food",
                    rarity: "regional",
                    links: [
                        { site: "Gangwon Tourism", url: "https://www.gangwon.to/gamja-ongsimi" }
                    ]
                },
                {
                    name: "Chueotang",
                    origin: "Namwon, Jeolla",
                    description: "Ground loach soup with perilla and chili, believed to be stamina food",
                    rarity: "rare",
                    links: [
                        { site: "Namwon City", url: "https://www.namwon.go.kr/chueotang" }
                    ]
                },
                {
                    name: "Heukimjajuk",
                    origin: "Jeolla Region",
                    description: "Black sesame porridge, traditional postpartum recovery food",
                    rarity: "rare",
                    links: [
                        { site: "Korean Heritage", url: "https://www.heritage.go.kr/heukimjajuk" }
                    ]
                }
            ]
        }
    }
};

let globe;
let currentCountry = null;

function initGlobe() {
    globe = Globe()
        .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-night.jpg')
        .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
        .backgroundColor('rgba(5,5,5,0)')
        .showAtmosphere(true)
        .atmosphereColor('#00d4ff')
        .atmosphereAltitude(0.15)
        .width(window.innerWidth - 400)
        .height(window.innerHeight - 60)
        (document.getElementById('globeViz'));

    // Add country markers
    const markers = globeData.countries.map(country => ({
        lat: country.lat,
        lng: country.lng,
        name: country.name,
        flag: country.flag,
        region: country.region,
        population: country.population,
        radius: 0.5,
        color: '#00d4ff'
    }));

    globe
        .labelsData(markers)
        .labelLat(d => d.lat)
        .labelLng(d => d.lng)
        .labelText(d => d.name)
        .labelSize(1.5)
        .labelDotRadius(0.4)
        .labelColor(() => '#00d4ff')
        .labelAltitude(0.01)
        .onLabelClick((d) => showCountryRecipes(d.name));

    // Auto-rotate
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.5;

    // Stop rotation on interaction
    globe.controls().addEventListener('start', () => {
        globe.controls().autoRotate = false;
    });

    // Handle resize
    window.addEventListener('resize', () => {
        globe.width(window.innerWidth - 400);
        globe.height(window.innerHeight - 60);
    });

    // Hide loading
    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
    }, 1500);
}

function showCountryRecipes(countryName) {
    currentCountry = countryName;
    const recipes = globeData.recipes[countryName];
    
    if (!recipes) {
        showEmptyState(countryName);
        return;
    }

    // Build content
    let html = `
        <div class="panel-header">
            <button class="close-btn" onclick="closePanel()">Close</button>
            <div class="location-flag">${recipes.region}</div>
            <h2 class="location-name">${countryName}</h2>
            <div class="location-region">${recipes.region} Cuisine</div>
        </div>
        <div class="section-title">Regional Specialties</div>
        <div class="recipes-list">
    `;

    recipes.dishes.forEach(dish => {
        const rarityClass = dish.rarity === 'rare' ? 'rare' : '';
        const rarityText = dish.rarity === 'rare' ? 'Rare Dish' : 
                          dish.rarity === 'traditional' ? 'Traditional' : 'Regional';
        
        html += `
            <div class="recipe-card">
                <div class="recipe-image">
                    <div class="recipe-image-placeholder"></div>
                    ${dish.rarity === 'rare' ? '<span class="recipe-rare">Rare</span>' : ''}
                </div>
                <div class="recipe-content">
                    <h3 class="recipe-title">${dish.name}</h3>
                    <p class="recipe-desc">${dish.description}</p>
                    <p class="recipe-origin">Origin: ${dish.origin}</p>
                    ${dish.links.map(link => `
                        <a href="${link.url}" target="_blank" class="recipe-link">
                            View on ${link.site}
                        </a>
                    `).join('')}
                </div>
            </div>
        `;
    });

    html += '</div>';

    document.getElementById('contentArea').innerHTML = html;
    document.getElementById('emptyState').style.display = 'none';
    document.getElementById('contentArea').style.display = 'block';

    // Focus globe on country
    const country = globeData.countries.find(c => c.name === countryName);
    if (country) {
        globe.pointOfView({ lat: country.lat, lng: country.lng, altitude: 1.5 }, 1000);
    }
}

function showEmptyState(countryName) {
    document.getElementById('contentArea').innerHTML = `
        <div class="empty-state">
            <div class="empty-icon">?</div>
            <h2 class="empty-title">${countryName}</h2>
            <p class="empty-text">Recipes for this region coming soon. Try another country!</p>
        </div>
    `;
    document.getElementById('emptyState').style.display = 'none';
    document.getElementById('contentArea').style.display = 'block';
}

function closePanel() {
    document.getElementById('contentArea').style.display = 'none';
    document.getElementById('emptyState').style.display = 'flex';
    currentCountry = null;
    globe.pointOfView({ lat: 20, lng: 0, altitude: 2.5 }, 1000);
}

// Search functionality
document.getElementById('searchInput')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const query = e.target.value.toLowerCase();
        const country = globeData.countries.find(c => 
            c.name.toLowerCase().includes(query)
        );
        if (country) {
            showCountryRecipes(country.name);
        }
    }
});

// Initialize on load
document.addEventListener('DOMContentLoaded', initGlobe);