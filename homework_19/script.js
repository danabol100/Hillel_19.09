function getData() {
  const response = fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=43.214&lon=27.914&appid=b999d6a4433679063ba74d12abbd358e"
  );
  response
    .then((resp) => resp.json())
    .then((data) => {
      const city = document.querySelector(".city");
      const temp = document.querySelector(".temp");
      const wind = document.querySelector(".wind");
      const currentName = data.name;
      const currentTemp = Math.round(data.main.temp - 273.15);
      const currentWind = data.wind.speed;
      const currentWindDeg = data.wind.deg;

      city.textContent = `Город: ${currentName}`;
      temp.textContent = `Температура: ${currentTemp} градусов`;
      wind.textContent = `Скорость ветра ${currentWind} м/с, направление ${currentWindDeg} градусов`;
    });
}
getData();

document.querySelector("button").addEventListener("click", getData);
