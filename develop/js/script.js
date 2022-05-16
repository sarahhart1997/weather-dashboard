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
    // Load api url
    var apiUrl = 
    // fetch request to API
    fetch(apiUrl).then(function(response) {
        // it worked! 
        if (response.ok) {
            response.json().then(function(data) {
            console.log(data)
            displayWeather(data, locationName)
            });
        // oopsie it's not working
        } else {
            window.alert("Sorry, we can't seem to find that location");
        }
    })
    .catch(function(error) {
        window.alert("Cannot connect to the weather app");
    });
};
// Display Weather
        //Current Weather

        // Future Forcast 

// Load Search History