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
    // Load city lat and long
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationName}&units=imperial&appid=8ecea19ce0d607abe128e080200901d8`;
    // Fetch city Lat/Long
    fetch(apiUrl).then(function(response) {
        // it worked! 
        if (response.ok) {
            response.json().then(function(data) {
                displayWeather(data);
                displayFuture(data);
            })
        } else {
            window.alert("Sorry, we can not seem to find that city.")
        }
    })
    .catch(function(error) {
        window.alert("Cannot connect to the weather app");
    });
};
// Display Weather
var displayWeather = function (data, locationName) {
    //Current Weather
    document.querySelector("#current-icon").innerHTML = `<img src='http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`>


    // Future Forcast
} 

// Load Search History