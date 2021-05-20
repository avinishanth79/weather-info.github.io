export function sunnyFilterFunc(tempArray){
    if((parseInt(tempArray.temperature) >= 29) && 
        (parseInt(tempArray.humidity) < 50) &&
        (parseInt(tempArray.precipitation) > 50))
    {
        return tempArray;
    };
}

export function coldyFilterFunc(precipArray){
    if((parseInt(precipArray.temperature) >= 20) && 
    (parseInt(precipArray.temperature) <= 28) &&
       (parseInt(precipArray.humidity) > 50) &&
       (parseInt(precipArray.precipitation) < 50) )
    {
        return precipArray;
    };
}

export function rainyFilterFunc(humidityArray){
    if((parseInt(humidityArray.temperature) < 20) && 
       (parseInt(humidityArray.humidity) >= 50) )
    {
        return humidityArray;
    };
}
