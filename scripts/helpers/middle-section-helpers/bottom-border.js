import {SUNNY,SNOWFLAKE,RAINY} from '/scripts/helpers/middle-section-helpers/constant.js';

export function BorderFunc(sunnyIconRef,coldyIconRef,rainyIconRef,weatherType){

    sunnyIconRef.style = (weatherType == SUNNY ? "border-bottom: 2px solid rgb(57, 225, 255);" : " ");
    coldyIconRef.style = (weatherType == SNOWFLAKE ? "border-bottom: 2px solid rgb(57, 225, 255);" : " ");
    rainyIconRef.style = (weatherType == RAINY ? "border-bottom: 2px solid rgb(57, 225, 255);" : " ");
}