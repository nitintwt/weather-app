const apiKey = "88354641dc8010d91bc9a191e9feca56";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

function checkWeather(city) {
    fetch(apiUrl + city + `&appid=${apiKey}`)
        .then(response => {
            if (response.status == 404) {
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            } else {
                return response.json();
            }
        })
        .then(data => {
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "℃";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
        });
}
searchBtn.addEventListener("click", function () {
    checkWeather(searchBox.value);
});
