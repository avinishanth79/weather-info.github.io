export function temperatureFunc(tempCelciusRef,HumidityRef,tempFahrenheitRef,precipitationRef,tempWeatherInfo,humidityWeatherInfo,precipitationWeatherInfo){
    tempCelciusRef.innerText = tempWeatherInfo;
    HumidityRef.innerText = humidityWeatherInfo;
    precipitationRef.innerText = precipitationWeatherInfo;

    //change temp to fah
    const celciusRef = tempCelciusRef.innerText.split("°")[0];
    tempFahrenheitRef.innerText = (((celciusRef * 1.8) + 32).toFixed(0) )+ `F` ;
}