import {scrollButtonFunc} from '../helpers/middle-section-helpers/scroll-button.js';
import {sortingFunc} from '../helpers/middle-section-helpers/sorting.js';
import {displayCardsFunc} from '.../helpers/middle-section-helpers/display-card.js';
import {BorderFunc} from '../helpers/middle-section-helpers/bottom-border.js';
import {sunnyFilterFunc,coldyFilterFunc,rainyFilterFunc} from '../helpers/middle-section-helpers/filtering.js';
import {SUNNY,SNOWFLAKE,RAINY} from '../helpers/middle-section-helpers/constant.js';
import {weatherInfoRef} from '../../weather-data/request.js';

const boxContainerRef = document.querySelector("#box_container");
const leftClickRef = document.querySelector("#backward_image_button");
const rightClickRef = document.querySelector("#forward_image_button");
const numbersDropdownRef = document.querySelector("#numbers_dropdown");
const sunnyIconRef = document.querySelector("#weather_icon_1");
const coldyIconRef = document.querySelector("#weather_icon_2");
const rainyIconRef = document.querySelector("#weather_icon_3");
const tempArray =[];
const precipArray =[];
const humidityArray =[];
const weatherData = await weatherInfoRef();
let dropdownCount=4;
let selectedIcon= "sunnyIcon";
let selectedArray;


/** to scroll the boxes from left to right and right to left
 *  @param {HTMLnodeRef} - boxContainerRef - pass HTML ref for the container to scroll
 *  @param {HTMLnodeRef} - leftClickRef - pass HTML ref for the container to scroll towards left
 *  @param {HTMLnodeRef} - rightClickRef - pass HTML ref for the container to scroll towards right
 */
scrollButtonFunc(boxContainerRef,leftClickRef,rightClickRef);

//push the objects into an array
for(let cities=0; cities<weatherData.length; cities++){
    tempArray.push(weatherData[cities]);
    precipArray.push(weatherData[cities]); 
    humidityArray.push(weatherData[cities]);
}

/** to sort the array based on the values
 *  @param {Array} - tempArray - Array of objects is passed to sort it based on the temperature
 *  @param {Array} - precipArray - Array of objects is passed to sort it based on the precipitation
 *  @param {Array} - humidityArray - Array of objects is passed to sort it based on the humidity
 */
sortingFunc(tempArray,precipArray,humidityArray);

/** to filter the array based on the conditions
 *  @param {Array} - tempArray - Array of objects is passed to filter it based on the sunny conditions
 * @param {Array} - precippArray - Array of objects is passed to filter it based on the coldy conditions
 * @param {Array} - humidityArray - Array of objects is passed to filter it based on the rainy conditions
 */
const sunnyArray = tempArray.filter(sunnyFilterFunc);
const coldyArray = precipArray.filter(coldyFilterFunc);
const rainyArray = humidityArray.filter(rainyFilterFunc);

selectedArray = sunnyArray;

/** to display the cards accordingly
 *  @param {number} - dropdownCount - gives the value in the dropdown button
 * @param {string} - selectedIcon - name of the icon
 * @param {array} - selectedArray - Array of objects is passed based on the required conditions
 */
displayCardsFunc(dropdownCount,selectedIcon,selectedArray);

//eventlistener for sunny icon
sunnyIconRef.addEventListener("click",()=>{
    selectedIcon = SUNNY;
    selectedArray = sunnyArray;
    displayCardsFunc(dropdownCount,selectedIcon,selectedArray);
    BorderFunc(sunnyIconRef,coldyIconRef,rainyIconRef,SUNNY);
});

//eventlistener for snowflake icon
coldyIconRef.addEventListener("click",()=>{
    selectedIcon = SNOWFLAKE;
    selectedArray = coldyArray;
    displayCardsFunc(dropdownCount,selectedIcon,selectedArray);
    BorderFunc(sunnyIconRef,coldyIconRef,rainyIconRef,SNOWFLAKE);
});

//eventlistener for rainy icon
rainyIconRef.addEventListener("click",()=>{
    selectedIcon = RAINY;
    selectedArray = rainyArray;
    displayCardsFunc(dropdownCount,selectedIcon,selectedArray);
    BorderFunc(sunnyIconRef,coldyIconRef,rainyIconRef,RAINY);
});

//eventlistener for dropdown value
numbersDropdownRef.addEventListener("change", (event)=>{
    dropdownCount = event.target.value;
    displayCardsFunc(dropdownCount,selectedIcon,selectedArray);
});