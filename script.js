const api='https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=80c186f5bbdfb3fedfb198ebe8d172f1';

const CurrentTemperature = document.querySelector('.Temperature');

const WindSpeed = document.querySelector('.WindSpeed')

const WeatherDescription = document.querySelector('.Description');

const InputValue = document.querySelector('#InputValue');



InputValue.addEventListener("submit",function input(e)
{
  e.preventDefault();
  const city = document.querySelector('#Fetchcity').value;
  console.log(city);

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=80c186f5bbdfb3fedfb198ebe8d172f1`)
.then((res)=>
{
  return res.json();
})
.then((data)=>
{
  console.log(data);
  var temperature = data.main.temp;
  var windSpd = data.wind.speed;
  var description = data.weather[0].description;

  CurrentTemperature.innerHTML="Current Temperature:"+Math.floor(temperature-273.15)+"°C";
  WindSpeed.innerHTML = "Current Wind Speed:" + windSpd ;
  WeatherDescription.innerHTML = "Feels like:" + description;
  
  
})
});