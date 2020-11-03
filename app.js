// init classes
const storage = new Storage();
 // get stored loaction data 
 const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city, weatherLocation.state);
const ui= new UI();

// get weather onload
document.addEventListener("DOMContentLoaded", getWeather)
// change location event
document.getElementById("w-changebtn").addEventListener("click", (e)=> {
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;

  weather.changeLocation(city,state);

  // set location in ls
  storage.setLocationData(city,state)

  // get and display weather 
  getWeather()

  // close modal

  $('#locModal').modal("hide");

})
// to call the weather.getweather on load we will wrap it in a function and ann call it with an event listener when the dom loads
function getWeather(){
  weather.getWeather()
  .then(results =>{
    ui.paint(results);
    //console.log(results);
  })
  .catch(err=>{console.log(err)})
}

