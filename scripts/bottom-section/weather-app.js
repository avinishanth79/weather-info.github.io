import {arrowChangeFunc} from '/scripts/helpers/bottom-section-helpers/arrow-change.js';
import {SortingDecisionFunc} from '/scripts/helpers/bottom-section-helpers/sorting-decision.js';
import {weatherInfoRef} from '/weather-data/request.js';

//referencing two icons
const continentRef = document.querySelector("#bottom_icon_1");               
const bottomTemperatureRef = document.querySelector("#bottom_icon_2");
const gridBoxRef = document.querySelector("#bottom_flex");  
const weatherData = await weatherInfoRef();

//initializing content ascending & descending array
const continentAscendingArray = [];                                          
const continentDescendingArray = [];
let continentClick = 0;                                   
let temperatureClick = 0;
let A;
let B;

//copying object into array
for(let city=0; city<weatherData.length; city++){                                              
    continentAscendingArray.push(weatherData[city]);
    continentDescendingArray.push(weatherData[city]);
}

//event listener for continent
continentRef.addEventListener("click", ()=>{
    continentClick+=1;

    /** to change the continent arrow from up to down or vice versa
     *  @param {number} - continentClick - counts whenever the continent arrow is clicked
     *  @param {HTMLnodeRef} - continentRef - reference for arrow symbol near the continent
    */
    arrowChangeFunc(continentClick,continentRef);

    /** to decide the sorting condition 
     *  @param {number} - continentClick - counts whenever the continent arrow is clicked
     *  @param {number} - temperatureClick - counts whenever the temperature arrow is clicked
     *  @param {array} - continentAscendingArray - array of objects to be sorted in ascending order based on continents
     *  @param {array} - continentDescendingArray - array of objects to be sorted in descending order based on continents
     *  @param {HTMLnodeRef} - gridBoxRef - HTML tag, where the each box is stored
     *  @param {variable} - A - variable used while doing sorting
     *  @param {variable} - B - variable used while doing sorting
    */
    SortingDecisionFunc(continentClick,temperatureClick,continentAscendingArray,continentDescendingArray,gridBoxRef,A,B);
});

//eventlistener for temperature
bottomTemperatureRef.addEventListener("click", ()=>{
    temperatureClick+=1;

    /** to change the temperature arrow from up to down or vice versa
     *  @param {number} - temperatureClick - counts whenever the temperature arrow is clicked
     *  @param {HTMLnodeRef} - bottomTemperatureRef - reference for arrow symbol near the temperature
    */
    arrowChangeFunc(temperatureClick,bottomTemperatureRef);
    SortingDecisionFunc(continentClick,temperatureClick,continentAscendingArray,continentDescendingArray,gridBoxRef,A,B);
});