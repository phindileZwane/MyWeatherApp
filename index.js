const searchInput = document.getElementById("search")
const btn = document.getElementById("button")
const locations = document.getElementById("place")
const icon = document.getElementById("icon")
const description = document.getElementById("description")
const temp = document.getElementById("temperature")

const apiKey = "3e40b7da38ff873d21a3423887f04809"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather"

btn.addEventListener("click", () =>{
  const place = searchInput.value;
  if (place){
    getWeather(place)
  }
})
function getWeather(place){

  const url = `${apiUrl}?q=${place}&appid=${apiKey}&units=metric`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    locations.textContent = data.name;
    icon.textContent = data.weather[0].icon;
    description.textContent = data.weather[0].description
    temp.textContent = `${Math.round(data.main.temp) + "C"}`

  })
  .catch(error => {
    console.error("Error while fectchong data:", error);
  })
}

