let apiKey = "16f6dbcdfe4723e076394b1753066975";
let city = document.getElementById("search-city");
let searchBtn = document.getElementById("search-btn");
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=hoshiarpur&appid=16f6dbcdfe4723e076394b1753066975`;
let temperature = document.querySelectorAll(".temp-data");
let weatherIcon = document.getElementById("weather-icon");
let cityName = document.getElementById("city-name");
let wind = document.getElementById("wind");
let humidity = document.getElementById("humidity");
let date = document.getElementById("date")

async function weather() {
  let res = await fetch(apiUrl);
  let result = await res.json();
  console.log(result);

  // date
const today = new Date();

const formattedDate = today.toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "2-digit",
  year: "2-digit",
});

console.log(formattedDate);


  // temperature
  let temp = result.main.temp;
  temperature.forEach((element) => {
    element.innerHTML = `${temp}°C`;
  });

  // wind
  let windData = result.wind.speed;
  console.log(windData);
  wind.innerHTML = `${windData} km/h`;


  // humidity
  let humidityData = result.main.humidity;
  humidity.innerHTML = `${ humidityData}`
}

weather();

// console.log(temperature);

// function onSearch(city) {}
