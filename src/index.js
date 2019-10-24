function showTemperature(response) {
  console.log(response.data.main.temp);

  let h2 = document.querySelector("h2");
  h2.innerHTML = `${Math.round(response.data.main.temp)}`;
}

let city = "Lisbon";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=875ea8327db11c913ffcc92c93a23805&units=metric`;

axios.get(url).then(showTemperature);
