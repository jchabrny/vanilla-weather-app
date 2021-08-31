function showWeather(response) {
  document.querySelector("#current-city").innerHTML = response.data.name;
  document.querySelector("#current-temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#weather-description").innerHTML =
    response.data.weather[0].description;
  let minTemp = Math.round(response.data.main.temp_min);
  let maxTemp = Math.round(response.data.main.temp_max);
  document.querySelector(
    "#temperature-span"
  ).innerHTML = `${minTemp}°C / ${maxTemp}°C`;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}

let apiKey = "23f36f924c54872c0021ed29214126a5";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric`;
axios.get(`${apiUrl}&appid=${apiKey}`).then(showWeather);
