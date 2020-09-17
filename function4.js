/*
convert celsius into fahrenheit into celsius, and vice versa. 
Function will take two parameters that will be  a temp either 
fahrenheit or celsius, up to 2 decimal places. 
The second argument will be either the letter ‘c’ or the letter ‘f’ 
to state whether the value given is starting in celsius or in fahrenheit. 
Convert the temp to the opposite unit, and return the value.  (35.6, ‘c’)
*/

const　celToFah = function(temp, cf) {
    if (cf === 'c') {
        return (temp * 9/5) + 32;
    } else if (cf === 'f') {
        return ((temp - 32) * 5 / 9).toFixed(2);
    }
};

console.log(celToFah(35, 'c'));
console.log(celToFah(128, 'f'));