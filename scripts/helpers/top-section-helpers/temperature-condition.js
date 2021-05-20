export function tempConditionFunc(temp){
    if(temp > 29){
        return "sunnyIcon";
    }else if(temp>= 23 && temp<= 29){
        return "cloudyIcon";
    }else if(temp>= 18 && temp<= 22){
        return "windyIcon";
    }else{
        return "rainyIcon";
    }
}