let apiKey = "16f6dbcdfe4723e076394b1753066975";
let cityInput = document.getElementById("city-name")
let searchBtn = document.getElementById("search-btn");
// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
let temp = document.getElementById("temp-data");
let weatherIcon = document.getElementById("weather-icon")
let now = new Date();
console.log(now);



const getData = async (city) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    let response = await fetch(apiUrl);
    let data = await response.json()
    let temperature = (data.main.temp).toFixed()
    temp.innerHTML = `${temperature}°C`;
    if (data.weather[0].main == "clear") {
        weatherIcon.innerHTML = `<i class="fa-solid fa-sun" style="color: rgb(255, 212, 59);"></i>`;
    
    } 
}




searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    getData(cityInput.value)
})




