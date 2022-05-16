//Load the important things
var searchBtn = document.getElementById('search-btn');
var location = document.getElementById('location-input');

// Event Listeners/Main Navigation

// Define the current date

// Gets the city name from search box
var getLocation = function(){
    var locationName = location.value.trim();
    if(locationName) {
        getWeather(locationName);
        // clear search
        locationName.value="";
    } else {
        window.alert("Please search for a city");
    }
}

// Get the current weather
var getWeather = function(locationName) {
    
}
// Display Weather
        //Current Weather

        // Future Forcast 

// Load Search History