// Your API endpoint and headers
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4c5cff49e4msh334c47870eb42c6p1e347bjsna51f30448dd2',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

// Function to fetch and update weather data for a city
async function getWeatherForCity(city, containerId) {
  try {
    const response = await fetch(url + `?city=${city}`, options);
    const data = await response.json();

    // Update placeholders in the HTML
    document.getElementById(`${containerId}-temp`).textContent = data.temp;
    document.getElementById(`${containerId}-feels-like`).textContent = data.feels_like;
    document.getElementById(`${containerId}-min_temp`).textContent = data.min_temp;
    document.getElementById(`${containerId}-max_temp`).textContent = data.max_temp;
    document.getElementById(`${containerId}-humidity`).textContent = data.humidity;
    document.getElementById(`${containerId}-wind_speed`).textContent = data.wind_speed;
    document.getElementById(`${containerId}-wind_degrees`).textContent = data.wind_degrees;
    document.getElementById(`${containerId}-sunrise`).textContent = data.sunrise;
    document.getElementById(`${containerId}-sunset`).textContent = data.sunset;
  } catch (error) {
    console.error(`Error fetching weather data for ${city}:`, error);
  }
}

// Function to fetch and update weather for the main city (default: Mumbai)
async function getWeatherForMainCity(city) {
  try {
    const response = await fetch(url + `?city=${city}`, options);
    const data = await response.json();

    // Update placeholders in the HTML
    cityName.innerHTML = city;
    temp.innerHTML = ' '+data.temp;
    temp2.innerHTML =' '+ data.temp;
    feels_like.innerHTML = ' '+ data.feels_like;
    humidity.innerHTML = ' '+data.humidity;
    humidity2.innerHTML=' '+data.humidity;
    min_temp.innerHTML =' '+ data.min_temp;
    max_temp.innerHTML =' '+ data.max_temp;
    wind_speed.innerHTML =' '+ data.wind_speed;
    wind_speed2.innerHTML = ' '+data.wind_speed;
    wind_degrees.innerHTML = ' '+data.wind_degrees;
    sunrise.innerHTML = ' '+data.sunrise;
    sunset.innerHTML = ' '+data.sunset;
  } catch (error) {
    console.error('Error fetching weather data for the main city:', error);
  }
}

// Initialize the main city and search bar with the default city
const cityInput = document.getElementById("city");
const submit = document.getElementById("submit");

// Get the default city value from the URL, or use 'Mumbai' if none is provided
const urlParams = new URLSearchParams(window.location.search);
const defaultCity = urlParams.get('city') || 'Mumbai';

cityInput.value = defaultCity;

// Call the function to fetch and update weather data for the default city
getWeatherForMainCity(defaultCity);

// Handle the search functionality
submit.addEventListener("click", (e) => {
  e.preventDefault();
  const cityValue = cityInput.value;
  getWeatherForMainCity(cityValue);
});


// Call the function to fetch and update weather data for the other cities
getWeatherForCity('Pune', 'pune');
getWeatherForCity('Lucknow', 'lucknow');
getWeatherForCity('Kolkata', 'kolkata');
getWeatherForCity('Chennai', 'chennai');
getWeatherForCity('Srinagar', 'srinagar');



