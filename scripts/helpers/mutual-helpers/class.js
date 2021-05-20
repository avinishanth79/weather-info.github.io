import {weatherInfo} from '/weather-data/weather-info.js';

export class CityObj {
    constructor(selectedCity) {
        this.cityName = weatherInfo[selectedCity].cityName;
        this.dateAndTime = weatherInfo[selectedCity].dateAndTime;
        this.timeZone = weatherInfo[selectedCity].timeZone;
        this.temperature = weatherInfo[selectedCity].temperature;
        this.humidity = weatherInfo[selectedCity].humidity;
        this.precipitation = weatherInfo[selectedCity].precipitation;
        this.nextFiveHrs = weatherInfo[selectedCity].nextFiveHrs;
    }
    nextFiveHoursFunc(hoursFlexRef) {
        let currentTime = this.dateAndTime.split(" ")[1];
        currentTime = currentTime.split(":")[0];
        let currentState = this.dateAndTime.split(" ")[2];
        currentTime = parseInt(currentTime, 10);
        hoursFlexRef.innerHTML = `<span>NOW</span>`;

        for (let i = 1; i <= 5; i++) {
            currentTime = currentTime + 1;
            if (currentTime >= 12) {
                if (currentTime > 12) {
                    currentTime = 1;
                    hoursFlexRef.innerHTML += `<span>${currentTime}${currentState}</span>`;
                }
                else {
                    currentState = (currentState == "AM") ? "PM" : "AM";
                    hoursFlexRef.innerHTML += `<span>${currentTime}${currentState}</span>`;
                }
            }
            else {
                hoursFlexRef.innerHTML += `<span>${currentTime}${currentState}</span>`;
            }
        }
    }
}


