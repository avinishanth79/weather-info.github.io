export function nextFiveHoursFunc(dateAndTimeRef,hoursFlexRef){
    let currentTime = dateAndTimeRef.split(" ")[1];
    currentTime = currentTime.split(":")[0];
    let currentState = dateAndTimeRef.split(" ")[2];
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