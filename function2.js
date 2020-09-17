/*
convert minutes into seconds. Function will take one parameter 
that will be  a number of minutes, up to 2 decimal places. 
Convert it into seconds, and return that number.
*/

function minToSec(min) {
    return (min * 60).toFixed(2);
}

console.log(minToSec(2));