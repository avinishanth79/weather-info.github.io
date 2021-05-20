export function continentDescendingFunc(continentDescendingArray,temperatureClick,A,B){

    function continentDescendFunc(a,b){
        A = a.timeZone.split("/")[0].toLowerCase(); 
        B = b.timeZone.split("/")[0].toLowerCase();
        if (A > B){
            return -1;
        }else if (A < B){
            return 1;
        }else{
            if((temperatureClick % 2)!=0){
                return parseInt(a.temperature) - parseInt(b.temperature);
            }
            else{
                return parseInt(b.temperature) - parseInt(a.temperature);
            }
        }
    }

    continentDescendingArray.sort(continentDescendFunc);
}
