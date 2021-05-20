import {gridBoxFunc} from '/scripts/helpers/bottom-section-helpers/grid-box.js';
import {continentAscendingFunc} from '/scripts/helpers/bottom-section-helpers/continent-ascending.js';
import {continentDescendingFunc} from '/scripts/helpers/bottom-section-helpers/continent-descending.js';

export function SortingDecisionFunc(continentClick,temperatureClick,continentAscendingArray,continentDescendingArray,gridBoxRef,A,B){

    if((continentClick % 2)!=0){

        /** to sort array in ascending order
         *  @param {array} - continentAscendingArray - array of objects to be sorted in ascending order based on continents
         *  @param {number} - temperatureClick - counts whenever the temperature arrow is clicked
         *  @param {variable} - A - variable used while doing sorting
         *  @param {variable} - B - variable used while doing sorting
        */
        continentAscendingFunc(continentAscendingArray,temperatureClick,A,B);

        /** to display the content in the grid 
         *  @param {array} - continentAscendingArray - array of objects which sorted in ascending order based on continents
         *  @param {HTMLnodeRef} - gridBoxRef - HTML tag, where the each box is stored
        */
        gridBoxFunc(continentAscendingArray,gridBoxRef);
    }
    else{

        /** to sort array in descending order
         *  @param {array} - continentDescendingArray - array of objects to be sorted in descending order based on continents
         *  @param {number} - temperatureClick - counts whenever the temperature arrow is clicked
         *  @param {variable} - A - variable used while doing sorting
         *  @param {variable} - B - variable used while doing sorting
        */
        continentDescendingFunc(continentDescendingArray,temperatureClick,A,B)

        /** to display the content in the grid 
         *  @param {array} - continentDescendingArray - array of objects which sorted in descending order based on continents
         *  @param {HTMLnodeRef} - gridBoxRef - HTML tag, where the each box is stored
        */
        gridBoxFunc(continentDescendingArray,gridBoxRef);
    }

}