export function arrowChangeFunc(click,clickedElementRef){
    if((click % 2)!=0){
        clickedElementRef.src = "assets/time-icons/arrowUp.svg";
    }else{
        clickedElementRef.src = "assets/time-icons/arrowDown.svg";
    }
}