


const apiKey = "4fa87bbc9037274a08ee9e12b8474c4b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
console.log(data);


document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "https://p1.hiclipart.com/preview/422/498/353/cartoon-cloud-weather-forecasting-weather-channel-severe-weather-weather-warning-accuweather-android-yellow-png-clipart.jpg";
}

else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "https://static.vecteezy.com/system/resources/thumbnails/010/989/531/small/hot-weather-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.png";
}

else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "https://cdn-icons-png.flaticon.com/512/3767/3767039.png";
}

else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "https://cdn3d.iconscout.com/3d/premium/thumb/drizzle-weather-7096832-5753008.png";
}

else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "https://i.pinimg.com/564x/1e/c4/e8/1ec4e83f5d60afc434ac5dc8a9efcdf4.jpg";
}

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})


 