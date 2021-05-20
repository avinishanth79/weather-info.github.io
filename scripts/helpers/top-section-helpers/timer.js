let timerReset;

export function timerFunc(dateAndTimeRef,timeRef){

    const timeRefBackup = dateAndTimeRef.split(" ")[1];
    let hoursRef = timeRefBackup.split(":")[0];
    hoursRef = parseInt(hoursRef,10);
    let minutesRef = timeRefBackup.split(":")[1];
    minutesRef = parseInt(minutesRef,10);
    let secondsRef = timeRefBackup.split(":")[2];
    secondsRef = parseInt(secondsRef,10);
    
    function secondsFunc(){
        timeRef.innerText = `${hoursRef}:${minutesRef}:${secondsRef}`;
        secondsRef+=1;
        if(secondsRef>=60){
            minutesRef+=1;
            secondsRef=0;
            if(minutesRef>=60){
                hoursRef+=1;
                minutesRef=0;
            }
        }
    }

    setTimeout(secondsFunc,0);
    if(timerReset){
        clearInterval(timerReset);
    }
    
    timerReset = setInterval(secondsFunc,1000);

}

