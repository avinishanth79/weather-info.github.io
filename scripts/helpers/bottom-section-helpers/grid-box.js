export function gridBoxFunc(currentItem,gridBoxRef){

    gridBoxRef.innerHTML = ``;

for(let i=0; i<12 ; i++){
    gridBoxRef.innerHTML += `<div class="bottom_flex_box">
                                <div class="bottom_country">
                                    ${currentItem[i].timeZone.split("/")[0]}
                                    <div class="bottom_temp">
                                        ${currentItem[i].temperature}
                                    </div>
                                </div>
                                <div class="bottom_time">
                                    ${currentItem[i].timeZone.split("/")[1]},
                                    ${currentItem[i].dateAndTime.split(" ")[1].split(":")[0]}:${currentItem[i].dateAndTime.split(" ")[1].split(":")[1]}
                                    ${currentItem[i].dateAndTime.split(" ")[2]}
                                    <div class="bottom_icon">
                                        <img src="assets/weather-icon/humidityIcon.svg">
                                        ${currentItem[i].humidity}
                                    </div>
                                </div>
                            </div>`;
}
}