let apiKey = "&appid=16f6dbcdfe4723e076394b1753066975";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
// city
let city = document.getElementById("city").value;
// search
let searchBtn = document.getElementById("search-btn");
// temperature
let temperature = document.querySelectorAll(".temp-data");
// weatherIcon
let weatherIcon = document.getElementById("weather-icon");
// wind
let wind = document.getElementById("wind");
// humidity
let humidity = document.getElementById("humidity");
// date
let date = document.getElementById("date")

async function weather(city) {
  let res = await fetch(`${apiUrl}${city}${apiKey}`);
  let result = await res.json();
  console.log(result);

  
  
  function onSearch() {
    console.log(city.value);
  }
  // temperature
  let temp = result.main.temp;
  temperature.forEach((element) => {
    element.innerHTML = `${temp}°C`;
  });

  // console.log(city);

  // wind
  let windData = result.wind.speed;
  // console.log(windData);
  wind.innerHTML = `${windData} km/h`;


  // humidity
  let humidityData = result.main.humidity;
  humidity.innerHTML = `${ humidityData}`
}

weather();

// console.log(temperature);

// function onSearch(city) {}
