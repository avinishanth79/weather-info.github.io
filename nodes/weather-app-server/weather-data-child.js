//npm package for current-time zone
const weatherData = require("weather-current-timezone");

//child for express-server.js
process.on("message", message => {
  if (message === "weatherData") {
    const weatherDataRef = JSON.stringify(weatherData.allTimeZones());
    process.send(weatherDataRef);
    process.exit();
  } else {
    const nextFiveHoursRef = JSON.stringify(
      weatherData.nextNhoursWeather(message, 5, weatherData.allTimeZones())
    );
    process.send(nextFiveHoursRef);
    process.exit();
  }
});
