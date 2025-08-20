function initSlider() {
    const imageList = document.querySelector(".slider-track"); // <-- Fix: select the track
    const sliderScrollbar = document.querySelector(".slider .gis-scrollbar");
    const scrollbarThumb = document.querySelector(".scrollbar-thumb");

    // Calculate the max scrollable width
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    // Update scrollbar thumb position
    function updateScrollThumbPosition() {
        const scrollPosition = imageList.scrollLeft;
        const thumbMax = sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth;
        const thumbPosition = (scrollPosition / maxScrollLeft) * thumbMax;
        scrollbarThumb.style.left = `${thumbPosition}px`; // <-- Fix: use backticks for string interpolation
    }

    // Listen to slider-track scroll
    imageList.addEventListener("scroll", updateScrollThumbPosition);

    // Initialize
    updateScrollThumbPosition();
}

// Run when DOM is loaded
document.addEventListener("DOMContentLoaded", initSlider);


// Add Leaflet Map for Map Section
// Initalize the map
var OahuMap = L.map('map').setView([21.255651, -157.791476], 8);
      
// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 maxZoom: 19,
 attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(OahuMap);

// Classical Icon
var cacIcon1 = L.divIcon ( {
  className: 'cacIcon',
  html: '🏛️',
  iconSize: [32, 32],
  iconAnchor: [17, 34],
  popupAnchor: [3, -25]
});

// Add markers
var plantationMarker = L.marker([21.39, -158.01], { icon: cacIcon1 }).addTo(OahuMap); // Hawaiian Plantation Village marker
plantationMarker.bindPopup('<strong>Agriculture Use & Polluted Waters</strong><br><br>This was designed for the Congressional App Challenge (Fall 2024) to be input into an app called, “Genki”. <br><br><strong>Overview:</strong> Assessing pesticides in lands with historical plantations and in polluted waters. Highlighting that pesticide practices within the sugarcane industry may have contributed to the canals contamination adjacent to the village.<br><br><strong>See full map here:</strong> https://arcg.is/HvTXW<br><br>');
 
// Classical Icon
var cacIcon2 = L.divIcon ( {
  className: 'cacIcon',
  html: '🏛️',
  iconSize: [32, 32],
  iconAnchor: [17, 34],
  popupAnchor: [2, -25]
});

var alawaiMarker = L.marker([21.2871, -157.8312], { icon: cacIcon2 }).addTo(OahuMap); // Ala Wai marker
alawaiMarker.bindPopup('<strong>Streams & Conduits</strong><br><br>This was designed for the Congressional App Challenge (Fall 2024) to be input into an app called, “Genki”.<br><br><strong>Overview: </strong>A examination of the streams and storm water conduits, as well as polluted water streams with a focus on the Ala Wai.<br><br><strong>See full map here:</strong> https://arcg.is/0zGPe5<br><br>');
   
// Fire Icon
var kaimukiIcon = L.divIcon ( {
  className: 'fireIcon',
  html: '🔥',
  iconSize: [32, 32],
  iconAnchor: [17, 34],
  popupAnchor: [20, -1]
});

var manoaCottageMarker = L.marker([21.284151, -157.817337], { icon: kaimukiIcon }).addTo(OahuMap); // Manoa Cottage Kaimuki Marker
manoaCottageMarker.bindPopup('<strong>Wildfire Risk Assessment</strong><br><br>This was designed for a fire assessment as part of an internship with Manoa Cottage Kaimuki in STEMworks Innovation Summer 2025 Internship.<br><br><strong>Overview:</strong An analysis of wildfires that could occur. Using US Forest Service image layers to enhance fire planning, focusing on Community Wildfire Risk Reduction Zones and burn probability.<br><br><u>Layers:</u><br><br><strong>Reduction Zones -</strong> This data provides consistent national spatial information that summarizes hazards and risks to populated areas, while considering vulnerable regions.<br><br><strong>Burn Probability -</strong> This marks the inaugural assessment of wildfire risk to communities, offering crucial data for comparing wildfire threats across populated areas in the United States.<br><br><strong>See full map here: </strong>https://arcg.is/1WvuDf4<br><br>');  

// Fire Station Icon
var fireStationIcon = L.divIcon ( {
  className: 'fireStation',
  html: '🧯',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [10, -25]
});

var mcCullyMarker = L.marker([21.288283, -157.824909], { icon: fireStationIcon }).addTo(OahuMap); // McCully Fire Station Marker
mcCullyMarker.bindPopup('<strong>McCully Fire Station</strong><br><br>This was designed for a fire assessment as part of an internship with Manoa Cottage Kaimuki in STEMworks Innovation Summer 2025 Internship.<br><br><strong>Overview:</strong> An analysis of nearby fire stations and their response routes (fastest route) to the Kaimuki location will be conducted. We will utilize travel area and cost assessment tools to determine which fire station can reach the nursing facility within five minutes in the event of a fire.<br><br><u>Travel Time:</u> 3.61 minimum minutes | 0.75 miles<br><br><strong>See full map here: </strong>https://arcg.is/1OrzbH0<br><br>');

var waikikiMarker = L.marker([21.273098, -157.816351], { icon: fireStationIcon }).addTo(OahuMap); // Waikiki Fire Station Marker
waikikiMarker.bindPopup('<strong>Waikiki Fire Station (Hq)</strong><br><br>This was designed for a fire assessment as part of an internship with Manoa Cottage Kaimuki in STEMworks Innovation Summer 2025 Internship.<br><br><strong>Overview:</strong> An analysis of nearby fire stations and their response routes (fastest route) to the Kaimuki location will be conducted. We will utilize travel area and cost assessment tools to determine which fire station can reach the nursing facility within five minutes in the event of a fire.<br><br><u>Travel Time:</u> 3.5 minimum minutes | 0.97 miles<br><br><strong>See full map here:</strong> https://arcg.is/1OrzbH0<br><br>');

// Car Icon
var carIcon = L.divIcon ( {
  className: 'carIcon',
  html: '🚗',
  iconSize: [32, 32],
  iconAnchor: [8, 16],
  popupAnchor: [20, -1]
});

var driveTimeMarker = L.marker([20.889433, -156.472890], { icon: carIcon }).addTo(OahuMap); // 15 Drive Time Marker

driveTimeMarker.bindPopup('<strong>15 Min Drive Time</strong><br><br>This was designed for a fire assessment as part of a capstone project for the Mapping Justice Summer 2024.<br><br><strong>Overview:</strong> A thorough analysis of the factors contributing to the Lahaina fires consequences, with a focused examination of Maui, assessing grocery store accessibility within a 15-minute drive.<br><br><u>Data:</u><br><br>Demographics - https://arcg.is/0amO0C0<br><br>Poverty Status & SNAP - https://arcg.is/09zzOe<br><br><strong>Dashboard -</strong> https://mappingjustice.maps.arcgis.com/apps/dashboards/903f51bb23e3412fa35b13440d00f9f2<br><br>');

// Fire Icon
var fireIcon = L.divIcon ( {
  className: 'fireIcon',
  html: '🔥',
  iconSize: [32, 32],
  iconAnchor: [6, 12],
  popupAnchor: [20, -1]
});

var lahainaMarker = L.marker([20.883, -156.667], { icon: fireIcon }).addTo(OahuMap); // Lahaina Wildfire Analysis Marker

lahainaMarker.bindPopup('<strong>Lahaina Wildfire Analysis</strong><br><br>This was designed for a fire assessment as part of a capstone project for the Mapping Justice Summer 2024.<br><br><strong>Overview:</strong> An analysis of the impacts resulting from the Lahaina wildfire.<br><br><u>Data:</u><br><br>Burnt Addresses = 2.5k<br><br>SNAP - 2022 HH w/o = 2,444<br><br>Poverty Status - Determined = 4,208 | Income below = 3,510<br><br><strong>See Dashboard:</strong> https://www.arcgis.com/apps/dashboards/432bb584354b4b6b87490dc3aa4f3715<br><br><strong>See full map here:</strong> https://arcg.is/1Pqurj3<br><br>');
        



