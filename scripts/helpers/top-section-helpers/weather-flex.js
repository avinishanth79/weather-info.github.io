import {tempConditionFunc} from '/scripts/helpers/top-section-helpers/temperature-condition.js';

export function weatherFlexFunc(tempFlexRef,weatherIconFlexRef,tempWeatherInfo,tempNextFiveHrsRef){
    //now flex
    let currentTemp = tempWeatherInfo.split("°")[0];
    tempFlexRef.innerHTML = `<span>${currentTemp}</span>`;
    currentTemp =parseInt(currentTemp,10);
    const nowTempRef = tempConditionFunc(currentTemp);
    weatherIconFlexRef.innerHTML = `<img src="assets/weather-icon/${nowTempRef}.svg" width=50vw height=50vw/>`;

    //next five hours
    for(let i of tempNextFiveHrsRef){
        let nextTemp = i.split("°")[0];
        tempFlexRef.innerHTML += `<span>${nextTemp}</span>`;
        nextTemp = parseInt(nextTemp,10);
        const tempCondRef = tempConditionFunc(nextTemp);
        weatherIconFlexRef.innerHTML += `<img src="assets/weather-icon/${tempCondRef}.svg" width=50vw height=50vw/>`;
    }
}