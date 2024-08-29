
const apikey = "bf0a8d23c87612bf9015217783c33382";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon")


async function weather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`)

    if (response.status == 404) {
        alert("Invalid city name")
    }

    const data = await response.json()


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    // math.round() is used to make temp in round figure
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    if (data.weather[0].main == "Clouds") {
        weathericon.src = "https://static.vecteezy.com/system/resources/thumbnails/012/595/172/small/realistic-white-cloud-png.png"
    }
    else if (data.weather[0].main == "Clear") {
        weathericon.src = "https://static.vecteezy.com/system/resources/thumbnails/010/989/531/small_2x/hot-weather-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.png"
    }
    else if (data.weather[0].main == "Rain") {
        weathericon.src = "https://static.vecteezy.com/system/resources/previews/034/923/169/large_2x/weather-sky-cloud-3d-render-icon-free-png.png"
    }
    else if (data.weather[0].main == "Drizzle") {
        weathericon.src = "https://static.vecteezy.com/system/resources/previews/047/239/656/non_2x/emojis-about-the-weather-png.png"
    }
    else if (data.weather[0].main == "Mist") {
        weathericon.src = "https://static.vecteezy.com/system/resources/previews/027/049/595/non_2x/cloudy-with-wind-weather-3d-illustration-free-png.png"
    }

    document.querySelector(".weather").style.display = "block";


}

searchbtn.addEventListener('click', () => {
    weather(searchbox.value);
})

