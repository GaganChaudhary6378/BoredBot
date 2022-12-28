fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=London%252Cuk", {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
    "x-rapidapi-key": "[your rapidapi key]"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.log(err);
});