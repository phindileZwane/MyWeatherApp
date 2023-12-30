const apiKey = '3e40b7da38ff873d21a3423887f04809';



//main weather
const townInput = document.getElementById('search');
const button = document.getElementById('button');
const town = document.getElementById('place');
const mainIcon = document.getElementById('mainIcon');
const description = document.getElementById('description');
const temperature = document.getElementById('temperature');

//forecast weather
const smallIcons = document.getElementById('small-icons')
const smallImg = document.getElementById('small-img');
const time = document.getElementById('timezone');
const smallTemp = document.getElementById('small-temp');

//creating an alart if input is empty
button.addEventListener('click', () => {
  const place = search.value;
if (place){
  getWeather(place);
}
});
//fetching data from open weather map
function getWeather(place){
  const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${apiKey}`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${place}&appid=${apiKey}`;

  fetch(currentUrl)
    .then(response => response.json())
    .then(data => {
      town.textContent = data.name;
      mainIcon.textContent = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${mainIcon}.png`;
      temperature.textContent = `${Math.round(data.main.temp)}°`
      description.textContent = data.weather[0].description;
    })
    .catch(error => {
      console.error('Error while Fetching current weather:', error)
    });

  fetch(forecastUrl)
    .then(response => response.json())
    .then(data => {
     displayHourly(data.list)
   })
    .catch(error =>{
      console.error('Error while fecthing forecast weather:', error)
      alert('Error while getting hourly data')
    });
    function displayHourly(hourlyData){
      const upComing24Hours = hourlyData.slice(0, 8);

      upComing24Hours.forEach(item => {
        time = new Date(item.dt * 1000);
        smallTemp.textContent = Math.round(item.main.temp)
        smallImg = item.weather[0].icon;
        const smallImgUrl = `https://openweathermap.org/img/wn/${smallImg}.png`;


      })
    }
}

