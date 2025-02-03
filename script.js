

const apiKey="4e71fb87064f7ef709de03e7719c80df";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city){
  const response= await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  if(response.status == 404){
    document.querySelector(".error").style.display= "block";
    document.querySelector(".weather").style.display="none";
  }
  else{
    document.querySelector(".city").innerHTML = data.name ;
    document.querySelector(".tempurature").innerHTML= Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity) + "%" ;
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " km/h";
  
    weatherIcon.src = `./docs/assets/images/${data.weather[0].main}.png`;
    console.log(`./images/${data.weather[0].main}.png`,weatherIcon,weatherIcon.src);

    document.querySelector(".error").style.display= "none";
    document.querySelector(".weather").style.display="block";
  }
}

searchBtn.addEventListener("click", ()=>{
  checkweather(searchBox.value);
})


