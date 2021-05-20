//server side using express framework
const express = require("express");
const { fork } = require("child_process");
const app = express();
app.use(express.json());

//import cors package to remove cors error
const cors = require("cors");
app.use(cors());

//get method for server side
app.get("/weatherData", (req, res) => {
  const weatherDataChild = fork("./weather-data-child.js");
  weatherDataChild.send("weatherData");
  weatherDataChild.on("message", weatherDataRef => {
    res.send(weatherDataRef);
  });
});

//post method for server side
app.post("/nextFiveHours", (req, res) => {
  res.set("Content-Type", "application/json");
  const city = req.body.city_Date_Time_Name;
  const weatherDataChild = fork("./weather-data-child.js");
  weatherDataChild.send(city);
  weatherDataChild.on("message", message => {
    res.send(message);
  });
});


const port = process.env.PORT || 3000;
app.listen(port);
console.log(`listening port ${port}`);
