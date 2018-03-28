/*Instructions: Write a function that takes a string which has integers inside 
it separated by spaces, and your task is to convert each integer 
in the string into an integer and return their sum.
*/

let stringTwo = "1 2 3 4";

function testTwo(string) {
    let array = string.split(' ');
    let sumInt = 0;
    for (let i = 0; i < array.length; i++) {
        sumInt += parseInt(array[i]);
    }
    return sumInt;
}
console.log(testTwo(stringTwo));

//so my issue here is that it logs out 01234, which means the array is an array of strings of numbers ie ['1', '2', '3', '4'] instead of [1, 2, 3, 4]//