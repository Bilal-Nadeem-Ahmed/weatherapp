class UI{
  constructor(){
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-wsc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.feelsLike = document.getElementById("w-feelslike");
    this.dewpoint = document.getElementById("w-duepoint");
    this.wind = document.getElementById("w-wind");
    

  }
  paint(weather) {
    this.location.textContent= weather.name;
    this.desc.textContent= weather.weather[0].description;
    this.string.textContent= weather.main.temp + " ºC";
    this.icon.setAttribute(
      'src',
      `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
      
  )
  this.humidity.textContent = `Relative Humidity: ${weather.main.humidity} `;
  this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like} ºC`;
  this.dewpoint.textContent = `Wind Speed: ${weather.wind.speed} ºC`;
  this.wind.textContent = `Minimum Temp: ${weather.main.temp_min} ºC`;
  
   
    
  }
}


//http://api.openweathermap.org/data/2.5/weather?q=nottingham,england&units=metric&appid=e91002bc012982501c149322fb852eb9

//http://api.openweathermap.org/data/2.5/weather?q=miami,florida&units=metric&appid=e91002bc012982501c149322fb852eb9