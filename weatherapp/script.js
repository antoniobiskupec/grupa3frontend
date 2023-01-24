const apiKey = "5ab2e8c3c5c0ce369531c65092497e5e";

const h1City = document.querySelector("#city");
const divRezultat = document.querySelector("#rezultat");
const searchBtn = document.querySelector("#searchBtn");
const input = document.querySelector("#cityInput");
const divTemp = document.querySelector("#temp");
const divHumidity = document.querySelector("#humidity");
const divClouds = document.querySelector("#clouds");
const divWind = document.querySelector("#wind");
const divPressure = document.querySelector("#pressure");
const divWeather = document.querySelector("#weather");
const divIcon = document.getElementById("icon");

const handleSearch = () => {
  //pročitaj input -> koji je grad
  const city = input.value.trim();
  if (city.length < 2) {
    return;
  }

  //napravi URL za neki grad
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&units=metric&appid=${apiKey}`;

  //dohvati vrijeme
  const request = new XMLHttpRequest();
  request.open("GET", url, true);

  request.onload = () => {
    if (request.status === 200) {
      const responseObject = JSON.parse(request.response);
      const temperature = responseObject.main.temp.toFixed(0);
      const clouds = responseObject.clouds.all;
      const humidity = responseObject.main.humidity;
      const wind = responseObject.wind.speed;
      const pressure = responseObject.main.pressure;
      const weather = responseObject.weather[0].description;
      const icon = responseObject.weather[0].icon;
      const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      console.log(iconUrl);

      h1City.innerText = city;
      divTemp.innerHTML = `Temperature is: <b>${temperature} &#8451</b>.`;
      divClouds.innerHTML = `Clouds: ${clouds}% `;
      divHumidity.innerHTML = `Humidity: ${humidity}%`;
      divWind.innerHTML = `Wind: ${wind} m/s`;
      divPressure.innerHTML = `Pressure: ${pressure} hPa`;
      divWeather.innerHTML = `Weather: ${weather}`;
      divIcon.src = `${iconUrl}`;
    } else if (request.status >= 400 && request.status < 500) {
      h1City.innerText = `${city} is not found.`;
      divTemp.innerText = "";
    } else {
      h1City.innerText = "There was an error. Try again.";
      divTemp.innerHTML = "";
    }
    input.value = "";
  };
  request.send();
};

//Enter key
const handleInputKey = (e) => {
  if (e.key === "Enter") {
    handleSearch();
  }
};

searchBtn.addEventListener("click", handleSearch);
input.addEventListener("keyup", handleInputKey);
