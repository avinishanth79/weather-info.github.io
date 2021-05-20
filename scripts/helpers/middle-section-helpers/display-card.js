import {dateFunc} from '../mutual-helpers/date.js';

const boxContainerRef = document.querySelector("#box_container");

export function displayCardsFunc(dropdownCount,selectedIcon,selectedArray){

    boxContainerRef.innerHTML = ``;

    if(dropdownCount>selectedArray.length){
        dropdownCount=selectedArray.length;
    }

    for(let j=0; j<dropdownCount; j++){

        boxContainerRef.innerHTML += `
        <div class="box" id="box">
            <div class="box_top">
                <p>
                    <img class="box_img" src="assets/weather-icon/${selectedIcon}.svg" />
                    <span class="mid_temp">${selectedArray[j].temperature}</span>
                </p>
            </div>
            <ul>
                <li>${selectedArray[j].cityName}</li>
                <li>${selectedArray[j].dateAndTime.split(" ")[1].split(":")[0]}:${selectedArray[j].dateAndTime.split(" ")[1].split(":")[1]} ${selectedArray[j].dateAndTime.split(" ")[2]}</li>
                <li>${dateFunc(selectedArray[j].dateAndTime)}</li>
                <li><img src="assets/weather-icon/humidityIcon.svg"><span style="font-weight: lighter;">${selectedArray[j].humidity}</span></li>
                <li><img src="assets/weather-icon/precipitationIcon.svg"><span style="font-weight: lighter;">${selectedArray[j].precipitation}</span></li>
            </ul>
            <div >
                <img class="box_icon" src="assets/city-icon/${selectedArray[j].cityName.toLocaleLowerCase()}.svg"/>
            </div>
        </div>`;
    }
}