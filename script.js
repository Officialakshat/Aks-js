let apiKey = "16f6dbcdfe4723e076394b1753066975";
let cityInput = document.getElementById("search-city");
let searchBtn = document.getElementById("search-btn");
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=delhi&appid=16f6dbcdfe4723e076394b1753066975`;
let temp = document.getElementsByClassName("temp-data");
let weatherIcon = document.getElementById("weather-icon");
let cityName = document.getElementById("city-name");


  async function weather() {
    let res = await fetch(apiUrl);
    let result = await res.json();
    console.log(result);
    let temp = result.main.temp
    return result;
    
    
}


weather()
function onSearch(city) {}
