const windDirections = {
  NORTH: 0,
  EAST: 90,
  SOUTH: 180,
  WEST: 270,
};

function detectWindDirection(grad) {
  switch (true) {
    case Math.abs(grad - windDirections.NORTH) < 45:
      return "Северный";
    case Math.abs(grad - windDirections.EAST) < 45:
      return "Восточный";
    case Math.abs(grad - windDirections.SOUTH) < 45:
      return "Южный";
    case Math.abs(grad - windDirections.WEST) < 45:
      return "Западный";
  }
}

function checkWeather() {
  let cityName = document.form.city.value;
  let api = new API();
  let URL = api.getURL(cityName);
  let promise = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", URL);

    xhr.response;
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };
    xhr.onerror = () => {
      reject(xhr.response);
    };
    xhr.send();
  });
  promise
    .then((data) => {
      data = JSON.parse(data);
      console.log(data);
      let str = data.weather[0]["description"];
      str = str[0].toUpperCase() + str.slice(1);
      document.querySelector(".descriptions").textContent = str;

      document.querySelector(
        ".img"
      ).innerHTML = `<img src = "https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png">`;

      document.querySelector(
        ".wind_speed"
      ).textContent = `Скорость ветра: ${data.wind.speed}`;

      document.querySelector(
        ".wind_direction"
      ).textContent = `Направление ветра: ${detectWindDirection(
        data.wind.deg
      )}`;

      document.querySelector(".temp").innerHTML = `Температура: ${
        data.main.temp
      } ${"&deg;"}`;

      document.querySelector(
        ".feels_like"
      ).textContent = `Ощущается как: ${data.main.feels_like}`;

      document.querySelector(
        ".humidity"
      ).textContent = `Влажность: ${data.main.humidity}`;

      let btn = document.querySelector(".reload");
      btn.style.visibility = "visible";
    })
    .catch((err) => alert("Город не найден!"));
}

class API {
  _apiKey = "48a1b0e594a9a485bd9fc5fb164bf6f1";

  getURL(cityName) {
    return `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this._apiKey}&lang=ru&units=metric`;
  }
}
