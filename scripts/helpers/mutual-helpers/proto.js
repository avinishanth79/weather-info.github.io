export function CityObj(cityName,dateAndTime,timeZone,temperature,humidity,precipitation){
    this.cityName = cityName;
    this.dateAndTime = dateAndTime;
    this.timeZone = timeZone;
    this.temperature = temperature;
    this.humidity = humidity;
    this.precipitation = precipitation;
}

CityObj.prototype.nextFiveHoursFunc = function(hoursFlexRef)
{
    let currentTime = this.dateAndTime.split(" ")[1];
    currentTime = currentTime.split(":")[0];
    let currentState = this.dateAndTime.split(" ")[2];
    currentTime = parseInt(currentTime,10);
    hoursFlexRef.innerHTML = `<span>NOW</span>`;

    for(let i=1;i<=5;i++){
        currentTime= currentTime+1;
        if(currentTime>=12){
            if(currentTime>12){
                currentTime = 1;
                hoursFlexRef.innerHTML += `<span>${currentTime}${currentState}</span>`;
            }
            else{
                currentState= (currentState=="AM") ? "PM" : "AM";
                hoursFlexRef.innerHTML += `<span>${currentTime}${currentState}</span>`;
            }
        }
        else{
            hoursFlexRef.innerHTML += `<span>${currentTime}${currentState}</span>`;
        }
    }
}




// CityObj.prototype.f = function() {
//     return(t)
// }


// CityObj.prototype.city = function() {
//     console.log(this);
//     // this.cityName = city;
//     // console.log(city);
// }

// CityObj.prototype.temp = function() {
//     this.temperature = temp;
// }



//  const Nome = new CityObj(weatherInfo.nome.cityName,weatherInfo.nome.dateAndTime,weatherInfo.nome.timeZone,
//                           weatherInfo.nome.temperature,weatherInfo.nome.humidity,weatherInfo.nome.precipitation,
//                           weatherInfo.nome.nextfiveHrs);

// console.log(Nome);

// let selectedCity = "Nome";

// if(selectedCity == "Nome"){

//     const Nome = new CityObj("nome","80","70","07-MAR-2020");
//     // console.log(Nome.city("london"));
//     console.log(Nome.cityName);
// }