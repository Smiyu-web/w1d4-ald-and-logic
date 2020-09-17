/*
convert hours into seconds. Take in a value of hours up to 
4 decimal places, and convert it into seconds. 
*/

function hoursToSec(h) {
    return (h * 3600);
}

console.log((hoursToSec(3)).toFixed(4));