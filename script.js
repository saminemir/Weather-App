
const apiKey="c97f90afeece535de4e505a06b0bc59b";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city){
  const response= await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);
  document.querySelector(".city").innerHTML = data.name ;
  document.querySelector(".tempurature").innerHTML= Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity) + "%" ;
  document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " km/h";

  weatherIcon.src = `images/${data.weather[0].main}.png`;
}

searchBtn.addEventListener("click", ()=>{
  checkweather(searchBox.value);
})


