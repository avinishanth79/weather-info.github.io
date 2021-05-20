"use strict"
import {timerFunc} from '../helpers/top-section-helpers/timer.js';
import {dateFunc} from '../helpers/mutual-helpers/date.js';
import {temperatureFunc} from '../helpers/top-section-helpers/temperature.js';
import {weatherFlexFunc} from '../helpers/top-section-helpers/weather-flex.js';
import {CityObj} from '../helpers/mutual-helpers/proto.js';
import {weatherInfoRef,fiveHoursInfo} from '../../weather-data/request.js';

const cityRef = document.querySelector("#city_dropdown");
const cityListRef = document.querySelector("#mycities");
const amPmIconRef = document.querySelector("#am_pm_icon");
const cityIconRef = document.querySelector("#city_icon");
const timeRef = document.querySelector("#time");
const dateRef = document.querySelector("#date");
const tempCelciusRef = document.querySelector("#temp_cel");
const HumidityRef = document.querySelector("#humid");
const tempFahrenheitRef = document.querySelector("#temp_fah");
const precipitationRef = document.querySelector("#precip");
const hoursFlexRef = document.querySelector("#hours_flex");
const tempFlexRef = document.querySelector("#numbers_flex");
const weatherIconFlexRef = document.querySelector("#weather_icon_flex");
const weatherData = await weatherInfoRef();

for(let i=0; i<weatherData.length; i++){
    cityListRef.innerHTML += `<option value=${weatherData[i].cityName}>${weatherData[i].cityName}</option>`; 
}

cityRef.addEventListener("change",async (event) => {

    const selectedCity = event.target.value;
    const indexRef = weatherData.findIndex((a)=> (a.cityName == selectedCity));
    const city = weatherData[indexRef];
    const weather = new CityObj(city.cityName,city.dateAndTime,city.timeZone,
                                city.temperature,city.humidity,city.precipitation);


    if(indexRef in weatherData)
    {
        cityIconRef.src = `assets/city-icon/${selectedCity.toLocaleLowerCase()}.svg`;      
        const dateAndTimeRef = weather.dateAndTime;  

        /** to make the timer run
         *  @param {string} - dateAndTimeRef - pass date and time value from weather data
         *  @param {HTMLnodeRef} - timeRef - pass HTML ref for the time
         */
        timerFunc(dateAndTimeRef,timeRef);

        /**to display date in proper format
         * @param {String} - dateAndTimeRef - pass date and time value from weather data
        */
        dateRef.innerText = dateFunc(dateAndTimeRef);                                         

        const amPmRef = dateAndTimeRef.split(" ")[2];    
        console.log(amPmRef.toLocaleLowerCase());
        amPmIconRef.src = `assets/time-icons/${amPmRef.toLocaleLowerCase()}State.svg`;

        const tempWeatherInfo = weather.temperature;                                         
        const humidityWeatherInfo = weather.humidity;
        const precipitationWeatherInfo = weather.precipitation;

        /**
         * @param {HTMLnodeRef} - tempCelciusRef - passing reference for temperature in celcius
         * @param {HTMLnodeRef} - HumidityRef - passing reference for humidity
         * @param {HTMLnodeRef} - tempFahrenheitRef - passing reference for temperature in fahrenheit
         * @param {HTMLnodeRef} - precipitationRef - passing reference for precipitation
         * @param {string} - tempWeatherInfo - pass temp value
         * @param {string} - humidityWeatherInfo - pass humidity value
         * @param {string} - percipitationWeatherInfo - pass percipitation value
        */
        temperatureFunc(tempCelciusRef,HumidityRef,tempFahrenheitRef,precipitationRef,tempWeatherInfo,humidityWeatherInfo,precipitationWeatherInfo);   
    
        /**
         * @param {HTMLnodeRef} - hoursFlexRef - reference node for next five hours
        */
        weather.nextFiveHoursFunc(hoursFlexRef);                               

        const bodyRef = `${dateAndTimeRef}, ${selectedCity}`;
        const nextFiveHoursWeatherData = await fiveHoursInfo(bodyRef);
        console.log(nextFiveHoursWeatherData);
        const tempNextFiveHrsRef = nextFiveHoursWeatherData.temperature;
        
        for(let i=0;i<5;i++){
            console.log(tempNextFiveHrsRef[i]);
        }

        /** display the next five hrs temp and also display weather icon accordingly
        * @param {HTMLnodeRef} - tempFlexRef - node reference for temperature
        * @param {HTMLnodeRef} - weatherIconFlexRef - node reference for weatherIcon
        * @param {string} - tempWeatherInfo - pass current temperature value
        * @param {string} - tempNextFiveHrsRef - pass next five hours temperature value
        */
        weatherFlexFunc(tempFlexRef,weatherIconFlexRef,tempWeatherInfo,tempNextFiveHrsRef);                     
    } 
});