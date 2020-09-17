/*
even or odd?  will take in one parameter 
( a number ) and print either even or odd, depending on the number. 
*/

const evenOrOdd = function (num) {
    if (num % 2 === 0) {
        return 'even';
    } else if (num % 2 === 1) {
        return 'odd';
    }
}

console.log(evenOrOdd(8));
console.log(evenOrOdd(9));