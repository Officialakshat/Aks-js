let apiKey = "16f6dbcdfe4723e076394b1753066975";
let cityInput = document.getElementById("search-city");
let searchBtn = document.getElementById("search-btn");
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=delhi&appid=16f6dbcdfe4723e076394b1753066975`;
let temp = document.getElementsByClassName("temp-data");
let weatherIcon = document.getElementById("weather-icon");
let cityName = document.getElementById("city-name");

if(city )

async function weather() {
  let res = await fetch(apiUrl);
    let result = await res.json();
    console.log(result);
    return result   
}
document.createElement("div")

weather()
function onSearch(city) {}
