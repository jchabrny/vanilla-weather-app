function formatDate(date) {
  let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let currentYear = date.getFullYear();
  let currentDay = days[date.getDay()];
  let currentMonth = months[date.getMonth()];
  let currentDate = date.getDate();
  let currentHour = (date.getHours() < 10 ? "0" : "") + date.getHours();
  let currentMinutes = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();

  return `
                  <ul>
                  <li>${currentMonth} ${currentDate}, ${currentYear}</li>
                  <li>${currentDay} ${currentHour}:${currentMinutes}</li>
                </ul>`;
}

let now = new Date();
let date = document.querySelector("#date");
date.innerHTML = formatDate(now);

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
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

let apiKey = "23f36f924c54872c0021ed29214126a5";
let city = "Frankfurt am Main";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
axios.get(`${apiUrl}&appid=${apiKey}`).then(showWeather);
