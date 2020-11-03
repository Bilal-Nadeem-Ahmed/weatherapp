class Weather{
  constructor(city, state){
    this.apiKey = "e91002bc012982501c149322fb852eb9";
    this.city = city;
    this.state= state;

  };
  // fetch weather from api
  async getWeather(){
    const response=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&units=metric&appid=${this.apiKey}`)

    const responseData = await response.json()
    return responseData;
  };

  // changelocation 
    changeLocation(city, state){
      this.city = city;
      this.state= state;
    };
}

// api.openweathermap.org/data/2.5/weather?q=nottingham,{state code}&appid=e91002bc012982501c149322fb852eb9

// api.openweathermap.org/data/2.5/weather?q=nottingham,england&units=metric&appid=e91002bc012982501c149322fb852eb9

