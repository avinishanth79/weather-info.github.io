export function sortingFunc(tempArray,precipArray,humidityArray){

    function temperatureSortFunc(a, b){
        return parseInt(b.temperature) - parseInt(a.temperature);
    }

    function precipitationSortFunc(a, b){
        return parseInt(b.precipitation) - parseInt(a.precipitation);
    }

    function humiditySortFunc(a, b){
        return parseInt(b.humidity) - parseInt(a.humidity);
    }

    tempArray.sort(temperatureSortFunc);
    precipArray.sort(precipitationSortFunc);
    humidityArray.sort(humiditySortFunc);
}