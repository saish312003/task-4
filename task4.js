const apiKey = "YOUR_API_KEY"; 

function getWeather() {
  const cityName = document.getElementById("city").value;
  const weatherDataDiv = document.getElementById("weather-data");
  
  if (cityName) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data) {
          weatherDataDiv.classList.remove("hidden");
          document.getElementById("city-name").textContent = `City: ${data.name}`;
          const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; 
          document.getElementById("weather-icon").src = iconUrl;
          document.getElementById("weather-description").textContent = `Description: ${data.weather[0].description}`;
          document.getElementById("temperature").textContent = `Temperature: ${Math.floor(data.main.temp - 273.15)}°C`; 
          document.getElementById("feels-like").textContent = `Feels Like: ${Math.floor(data.main.feels_like - 273.15)}°C`;
        } else {
          alert("No weather data found for this city.");
        }
      })
      .catch(error => {
        console.error(error);
        alert("Error retrieving weather data. Please try again later.");
      });
  } else {
    alert("Please enter a city name.");
  }
}
